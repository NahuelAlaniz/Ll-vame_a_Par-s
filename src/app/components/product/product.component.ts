import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
  selector: 'app-product',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  listProducts: Product[] = []

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct()
  }
  getProduct() {
    this._productService.getProducts().subscribe(data => {
      console.log(data);
      this.listProducts = data

    })
  }
}

