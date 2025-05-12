
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Productmodelsinterface } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FooterComponent, NavbarComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  cartItems: Productmodelsinterface[] = [];

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private productService: ProductService) {

    this.checkoutForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      codigoPostal: ['', Validators.required]
    });

    this.cartItems = this.cartService.getCarrito();
  }

  ngOnInit(): void {
    // 🔥 Restaurar el scroll al abrir el checkout
    document.body.style.overflow = 'auto';
  }

  getCantidad(id: number): number {
    return this.cartService.getCantidad(id);
  }

  get total() {
    return this.cartService.getTotal();
  }

  //
  // Función para actualizar el stock después de la compra
  actualizarStock() {
    const productosAActualizar = this.cartItems.map(p => ({
      id: p.id,
      cantidad: this.getCantidad(p.id)
    }));

    this.productService.actualizarStock(productosAActualizar).subscribe(
      response => {
        console.log('Stock actualizado:', response);
        // Aquí puedes hacer lo que necesites después de la actualización del stock
      },
      error => {
        console.error('Error actualizando el stock:', error);
      }
    );
  }

  //
  onSubmit() {
    if (this.checkoutForm.valid) {
      const cliente = this.checkoutForm.value;
      const productos = this.cartItems.map(p => {
        const cantidad = this.getCantidad(p.id);
        return `${cantidad} x ${p.name} (${p.size}) - ${p.description} - $${(p.price * cantidad).toFixed(2)}`;
      }).join('\n');

      const total = this.total.toFixed(2);

      const mensaje = `🛒 *Nuevo pedido desde la tienda online*\n\n` +
        `👤 *Nombre:* ${cliente.nombre}\n` +
        `📧 *Email:* ${cliente.email}\n` +
        `🏠 *Dirección:* ${cliente.direccion}, ${cliente.ciudad} - CP: ${cliente.codigoPostal}\n\n` +
        `📦 *Productos:*\n${productos}\n\n` +
        `💵 *Total:* AR$${total}`;

      const mensajeCodificado = encodeURIComponent(mensaje);
      const numeroWhatsApp = '2994273573';
      const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensajeCodificado}`;

      window.open(url, '_blank');

      alert('Redirigiendo a WhatsApp...');
      this.checkoutForm.reset();


      // Actualizamos el stock después de la compra
      this.actualizarStock();

      // Limpiamos el carrito y el formulario
      this.checkoutForm.reset();
      this.cartService.getCarrito().length = 0;
    }
  }
}