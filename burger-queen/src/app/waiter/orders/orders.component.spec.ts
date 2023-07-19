import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersComponent } from './orders.component';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ProductsI } from '../../interfaces/products.interface';
import { ProductsService } from '../../services/products.service';
import { ProductsToOrderI } from '../../interfaces/order.interface'
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr'; // Importamos ToastrModule


describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  // Otras variables necesarias para las pruebas
  const productsMock: ProductsI[] = [
    { id: 1, name: 'Café americano', type: 'desayuno', price: 500, image: 'cafe.jpg' },
    { id: 2, name: 'Agua 500ml', type: 'almuerzo', price: 500, image: 'agua.jpg' },
  ];
  const productsQMock: ProductsToOrderI[] = [
    {
      qty: 0,
      product: productsMock[0]
    },
    {
      qty: 0,
      product:  productsMock[1],
    }
  ];
  // const toastrServiceMock = {
  //   success: jest.fn(),
  // };

  // mock completo del servicio ProductsService
  const productsServiceMock = {
    getProductsFromAPI: jest.fn(() => of(productsMock)),
    getProductsByType: jest.fn().mockReturnValue(productsMock),
  };

  // mock del AuthService
  const authServiceMock = {
    getCurrentUser: jest.fn().mockReturnValue({ accessToken: 'tokenAccess', user: { email: 'waiter@gmail.com' } }),
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersComponent],
      imports: [ToastrModule.forRoot()],
      providers: [
        { provide: ProductsService, useValue: productsServiceMock },
        { provide: AuthService, useValue: authServiceMock },
        { provide: ToastrService, useValue: authServiceMock},
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('filterProducts', () => {
    it('deberia de filtrar productos por tipo y enviarlos a variable filteredProducts', () => {
      component.products = productsMock; // Establecemos el arreglo de productos en el componente

      // Prueba para filtrar por desayuno
      component.filterProducts('desayuno');
      expect(productsServiceMock.getProductsByType).toHaveBeenCalledWith('desayuno', productsMock);
      expect(component.filteredProducts.length).toBeGreaterThan(0);
      expect(component.filteredProducts).toEqual(productsQMock);

      // Prueba para filtrar por almuerzo
      component.filterProducts('almuerzo');
      expect(productsServiceMock.getProductsByType).toHaveBeenCalledWith('almuerzo', productsMock);
      expect(component.filteredProducts.length).toBeGreaterThan(0);
      expect(component.filteredProducts).toEqual(productsQMock);
    });
  });

  describe('updateQuantity', () => {
    it('debería agregar productos a la variable cart y aumentar la cantidad de qty', () => {
      const productToAdd: ProductsToOrderI = {
        qty: 0,
        product: productsMock[0],
      };
      component.cart = []; // Aseguramos que el carrito esté vacío

      // Agregamos un producto al carrito
      component.updateQuantity({ eventValue: 1, product: productToAdd });
      expect(component.cart.length).toBe(1);
      expect(component.cart[0]).toBe(productToAdd);
      expect(productToAdd.qty).toBe(1);

      // Agregamos más cantidad del mismo producto
      component.updateQuantity({ eventValue: 2, product: productToAdd });
      expect(component.cart.length).toBe(1);
      expect(productToAdd.qty).toBe(3);
    });

    it('deberia de quitar productos de carritos si el valor enviado es cero ', () => {
      const productToRemove: ProductsToOrderI = {
        qty: 3,
        product: productsMock[1],
      };
      component.cart = [productToRemove]; // Agregamos el producto al carrito

      // Quitamos un producto del carrito
      component.updateQuantity({ eventValue: -1, product: productToRemove });
      expect(component.cart.length).toBe(1);
      expect(productToRemove.qty).toBe(2);

      // Quitamos más cantidad del mismo producto
      component.updateQuantity({ eventValue: -3, product: productToRemove });
      expect(component.cart.length).toBe(0);
    });
  });
});