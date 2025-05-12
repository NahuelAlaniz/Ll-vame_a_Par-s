import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private AppUrl: string;
  private APIUrl: string;
  constructor(private http: HttpClient) {
    this.AppUrl = environment.TSEURL;
    this.APIUrl = 'api/product';
  }


  getProducts(): Observable<Product[]> {
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.get<Product[]>(`${this.AppUrl}${this.APIUrl}/getProducts`, { headers: headers })
  }

  /////


  // Método para actualizar el stock de los productos
  actualizarStock(productos: { id: number, cantidad: number }[]): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.AppUrl}${this.APIUrl}/updateStock`, { productos }, { headers: headers });
  }
}



