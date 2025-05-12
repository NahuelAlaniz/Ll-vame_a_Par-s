import { Injectable } from '@angular/core';
import { Productmodelsinterface } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';


@Injectable({
  providedIn: 'root',
})
export class CartService {

  private carrito: Productmodelsinterface[] = [];
  private cantidades: { [id: number]: number } = {};

  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) { }

  getCarrito(): Productmodelsinterface[] {
    return this.carrito;
  }

  getCantidad(id: number): number {
    return this.cantidades[id] || 1;
  }

  agregarProducto(producto: Productmodelsinterface) {
    const yaExiste = this.carrito.find(p => p.id === producto.id);
    if (!yaExiste) {
      this.carrito.push(producto);
      this.cantidades[producto.id] = 1;
    } else {
      this.incrementarCantidad(producto.id);
    }
  }

  incrementarCantidad(id: number) {
    const producto = this.carrito.find(p => p.id === id);
    if (producto && producto.stock > this.getCantidad(id)) {
      this.cantidades[id]++;
    } else {
      console.warn('No hay suficiente stock para incrementar');
    }
  }

  decrementarCantidad(id: number) {
    if (this.cantidades[id] > 1) {
      this.cantidades[id]--;
    }
  }

  eliminarDelCarrito(id: number) {
    this.carrito = this.carrito.filter(p => p.id !== id);
    delete this.cantidades[id];
  }

  getTotal(): number {
    return this.carrito.reduce((total, p) => total + p.price * this.getCantidad(p.id), 0);
  }
}
