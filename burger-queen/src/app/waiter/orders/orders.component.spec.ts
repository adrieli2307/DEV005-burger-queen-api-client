import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersComponent } from './orders.component';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ProductsI } from '../../interfaces/products.interface';
import { ProductsService } from '../../services/products.service';
import { ProductsToOrderI } from '../../interfaces/order.interface'
import { AuthService } from '../../services/auth.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { OrdersService } from '../../services/orders.service';
import { render as renderTestLibrary, fireEvent, render  } from '@testing-library/angular';

describe('OrdersComponent', () => {
  // Mock de servicios y otras dependencias
  const mockAuthService = {
    getCurrentUser: jest.fn(() => ({ user: { email: 'test@example.com', id: 1 } })),
  };

  const mockProductsService = {
    getProductsFromAPI: jest.fn(() => of([])),
    getProductsByType: jest.fn(),
  };

  const mockOrdersService = {
    postOrder: jest.fn(),
  };

  const mockToastrService = {
    success: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debe enviar el pedido al hacer clic en el botón ENVIAR', async () => {
    const { getByText, getByLabelText, getAllByRole } = await render(OrdersComponent, {
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: ProductsService, useValue: mockProductsService },
        { provide: OrdersService, useValue: mockOrdersService },
        { provide: ToastrService, useValue: mockToastrService },
      ],
    });

    // Simular valores de entrada
    fireEvent.input(getByLabelText('Cliente'), { target: { value: 'John Doe' } });
    fireEvent.input(getByLabelText('N° de mesa'), { target: { value: '5' } });

    // Simular selección de productos
    const buttons = getAllByRole('button', { name: 'Agregar' });
    fireEvent.click(buttons[0]); // Agregar primer producto
    fireEvent.click(buttons[1]); // Agregar segundo producto

    // Simular clic en el botón ENVIAR
    fireEvent.click(getByText('ENVIAR'));

    // Verificar que se haya llamado al servicio de pedidos con los datos correctos
    expect(mockOrdersService.postOrder).toHaveBeenCalledWith(expect.objectContaining({
      userId: 1,
      client: 'John Doe',
      products: expect.arrayContaining([]),
      status: 'pending',
    }));

    // Verificar que se haya mostrado la notificación de éxito
    expect(mockToastrService.success).toHaveBeenCalledWith('El pedido ha sido enviado exitosamente', '', expect.any(Object));

    // Verificar que el formulario se haya reseteado
    const nameClientInput = getByLabelText('Cliente') as HTMLInputElement;
    const numberTableInput = getByLabelText('N° de mesa') as HTMLInputElement;
    expect(nameClientInput.value).toBe('');
    expect(numberTableInput.value).toBe('');
  });
});