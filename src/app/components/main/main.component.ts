import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { Productmodelsinterface } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';



@Component({
  selector: 'app-main',
  imports: [NavbarComponent, RouterLink, FooterComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  selectedProduct: Productmodelsinterface | null = null;
  carritoffcanvas: Productmodelsinterface[] = [];

  constructor(
    public cartService: CartService
  ) { }

  eliminarDelCarrito(productId: number) {
    this.cartService.eliminarDelCarrito(productId);
  }



}
