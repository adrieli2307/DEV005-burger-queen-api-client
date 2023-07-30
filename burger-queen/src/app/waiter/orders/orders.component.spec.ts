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


describe('OrderComponent',()=>{
  // mock de servicios 
  console.log('donde estas')
  let mockProductsService: Partial<ProductsService>;
  let mockOrdersService: Partial<OrdersService>;
  let mockToastrService: Partial<ToastrService>;

  beforeEach( async()=>{
    // Creación de mocks

    mockProductsService = {
      getProductsFromAPI: jest.fn(()=> of ([])),
      getProductsByType: jest.fn(),
    };
    mockOrdersService = {
      getOrders : jest.fn(()=> of ([])),
    };
    mockToastrService = {
      success: jest.fn(),
    };
    jest.clearAllMocks();

    const ordersC = await render(OrdersComponent, {
      providers:[
        { provide: ProductsService, useValue : mockProductsService},
        { provide: OrdersService, useValue : mockOrdersService},
        { provide: ToastrService, useValue : mockProductsService},
      ]
    })
    
    console.log('probando render', ordersC)
    console.log('holasss')

  })

  
})


// describe('OrdersComponent', () => {
//   // Mock de servicios y otras dependencias
//   const mockAuthService = {
//     getCurrentUser: jest.fn(() => ({ user: { email: 'test@example.com', id: 1 } })),
//   };

//   const mockProductsService = {
//     getProductsFromAPI: jest.fn(() => of([])),
//     getProductsByType: jest.fn(),
//   };

//   const mockOrdersService = {
//     postOrder: jest.fn(),
//   };

//   const mockToastrService = {
//     success: jest.fn(),
//   };

//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it('debe enviar el pedido al hacer clic en el botón ENVIAR', async () => {
//     const { getByText, getByLabelText, getAllByRole } = await render(OrdersComponent, {
//       imports: [ReactiveFormsModule],
//       providers: [
//         { provide: AuthService, useValue: mockAuthService },
//         { provide: ProductsService, useValue: mockProductsService },
//         { provide: OrdersService, useValue: mockOrdersService },
//         { provide: ToastrService, useValue: mockToastrService },
//       ],
//     });

//     // Simular valores de entrada
//     fireEvent.input(getByLabelText('Cliente'), { target: { value: 'John Doe' } });
//     fireEvent.input(getByLabelText('N° de mesa'), { target: { value: '5' } });

//     // Simular selección de productos
//     const buttons = getAllByRole('button', { name: 'Agregar' });
//     fireEvent.click(buttons[0]); // Agregar primer producto
//     fireEvent.click(buttons[1]); // Agregar segundo producto

//     // Simular clic en el botón ENVIAR
//     fireEvent.click(getByText('ENVIAR'));

//     // Verificar que se haya llamado al servicio de pedidos con los datos correctos
//     expect(mockOrdersService.postOrder).toHaveBeenCalledWith(expect.objectContaining({
//       userId: 1,
//       client: 'John Doe',
//       products: expect.arrayContaining([]),
//       status: 'pending',
//     }));

//     // Verificar que se haya mostrado la notificación de éxito
//     expect(mockToastrService.success).toHaveBeenCalledWith('El pedido ha sido enviado exitosamente', '', expect.any(Object));

//     // Verificar que el formulario se haya reseteado
//     const nameClientInput = getByLabelText('Cliente') as HTMLInputElement;
//     const numberTableInput = getByLabelText('N° de mesa') as HTMLInputElement;
//     expect(nameClientInput.value).toBe('');
//     expect(numberTableInput.value).toBe('');
//   });

//   // Agrega más pruebas según sea necesario para cubrir los casos de uso y escenarios relevantes de tu componente.
// });

// describe('OrdersComponent', () => {
//   let component: OrdersComponent;
//   let fixture: ComponentFixture<OrdersComponent>;


//   const productsMock: ProductsI[] = [
//     { id: 1, name: 'Café americano', type: 'desayuno', price: 500, image: 'cafe.jpg' },
//     { id: 2, name: 'Agua 500ml', type: 'almuerzo', price: 500, image: 'agua.jpg' },
//   ];
//   const productsQMock: ProductsToOrderI[] = [
//     {
//       qty: 0,
//       product: productsMock[0]
//     },
//     {
//       qty: 0,
//       product:  productsMock[1],
//     }
//   ];


//   const productsServiceMock = {
//     getProductsFromAPI: jest.fn(() => of(productsMock)),
//     getProductsByType: jest.fn().mockReturnValue(productsMock),
//   };

//   const authServiceMock = {
//     getCurrentUser: jest.fn().mockReturnValue({ accessToken: 'tokenAccess', user: { email: 'waiter@gmail.com' } }),
//   };


//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [OrdersComponent],
//       imports: [ToastrModule.forRoot()],
//       providers: [
//         { provide: ProductsService, useValue: productsServiceMock },
//         { provide: AuthService, useValue: authServiceMock },
//         { provide: ToastrService, useValue: authServiceMock},
//       ],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(OrdersComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   describe('filterProducts', () => {
//     it('deberia de filtrar productos por tipo y enviarlos a variable filteredProducts', () => {
//       component.products = productsMock; 


//       component.filterProducts('desayuno');
//       expect(productsServiceMock.getProductsByType).toHaveBeenCalledWith('desayuno', productsMock);
//       expect(component.filteredProducts.length).toBeGreaterThan(0);
//       expect(component.filteredProducts).toEqual(productsQMock);


//       component.filterProducts('almuerzo');
//       expect(productsServiceMock.getProductsByType).toHaveBeenCalledWith('almuerzo', productsMock);
//       expect(component.filteredProducts.length).toBeGreaterThan(0);
//       expect(component.filteredProducts).toEqual(productsQMock);
//     });
//   });

//   describe('updateQuantity', () => {
//     it('debería agregar productos a la variable cart y aumentar la cantidad de qty', () => {
//       const productToAdd: ProductsToOrderI = {
//         qty: 0,
//         product: productsMock[0],
//       };
//       component.cart = []; 
//       component.updateQuantity({ eventValue: 1, product: productToAdd });
//       expect(component.cart.length).toBe(1);
//       expect(component.cart[0]).toBe(productToAdd);
//       expect(productToAdd.qty).toBe(1);


//       component.updateQuantity({ eventValue: 2, product: productToAdd });
//       expect(component.cart.length).toBe(1);
//       expect(productToAdd.qty).toBe(3);
//     });

//     it('deberia de quitar productos de carritos si el valor enviado es cero ', () => {
//       const productToRemove: ProductsToOrderI = {
//         qty: 3,
//         product: productsMock[1],
//       };
//       component.cart = [productToRemove]; 

//       component.updateQuantity({ eventValue: -1, product: productToRemove });
//       expect(component.cart.length).toBe(1);
//       expect(productToRemove.qty).toBe(2);

//       component.updateQuantity({ eventValue: -3, product: productToRemove });
//       expect(component.cart.length).toBe(0);
//     });
//   });
// });