
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Productmodelsinterface } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { Product } from '../../interfaces/product';


@Component({
  selector: 'app-remeras',
  imports: [NavbarComponent, CommonModule, RouterLink, FooterComponent],
  templateUrl: './remeras.component.html',
  styleUrl: './remeras.component.css'
})
export class RemerasComponent implements OnInit {


  selectedCategory: string | null = null;
  selectedSize: string | null = null;
  originalProducts: Product[] = [];
  listProducts: Product[] = [];

  allowedCategories = [
    'remera', 'camisa'
  ];

  allowedSizes = [
    'M', 'L'
  ];



  constructor(private _productService: ProductService, public cartService: CartService) { }

  ngOnInit(): void {
    this.getProduct()
  }
  getProduct() {
    this._productService.getProducts().subscribe({
      next: data => {
        this.originalProducts = data.filter(product =>
          this.allowedCategories.includes(product.category) &&
          this.allowedSizes.includes(product.size)
        );
        this.applyFilters();
      },
      error: err => {
        console.error('Error al cargar productos', err);
      }
    });
  }


  applyFilters() {
    this.listProducts = this.originalProducts.filter(product => {
      const matchesCategory = this.selectedCategory ? product.category === this.selectedCategory : true;
      const matchesSize = this.selectedSize ? product.size === this.selectedSize : true;
      return matchesCategory && matchesSize;
    });
  }


  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  filterBySize(size: string) {
    this.selectedSize = size;
    this.applyFilters();
  }

  showAll() {
    this.selectedCategory = null;
    this.selectedSize = null;
    this.applyFilters();
  }



  // Método para agregar un producto al carrito desde el offcanvas
  agregarAlCarritoffcanvas(item: Productmodelsinterface) {
    this.cartService.agregarProducto(item);  // Asegúrate de que 'agregarProducto' esté definido en tu CartService
  }

  // Agregar producto al carrito
  addToCart(product: Productmodelsinterface) {
    this.cartService.agregarProducto(product);
  }

  // Eliminar producto del carrito
  removeFromCart(productId: number) {
    this.cartService.eliminarDelCarrito(productId);
  }

  // Incrementar cantidad de un producto en el carrito
  incrementarCantidad(productId: number) {
    this.cartService.incrementarCantidad(productId);
  }

  // Decrementar cantidad de un producto en el carrito
  decrementarCantidad(productId: number) {
    this.cartService.decrementarCantidad(productId);
  }

  // Obtener el total del carrito
  getTotal() {
    return this.cartService.getTotal();
  }

  // Obtener cantidad de un producto específico en el carrito
  getCantidad(productId: number) {
    return this.cartService.getCantidad(productId);
  }

  // Si necesitas obtener todos los productos en el carrito (opcional)
  getCarrito() {
    return this.cartService.getCarrito();
  }

}