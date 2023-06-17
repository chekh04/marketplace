import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductModel} from "./models/product.model";
import {BehaviorSubject, filter, first, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsSource$: BehaviorSubject<ProductModel[]> = new BehaviorSubject<ProductModel[]>([]);

  constructor(private http: HttpClient) { }

  get products$(): Observable<ProductModel[]> {
    return this.productsSource$.asObservable();
  }
  public getProductById(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/get-product-by-id', {params: {id}});
  }
  public updateProductById(product: ProductModel): Observable<any> {
    return this.http.patch('http://localhost:3000/update-product-by-id', product, {responseType: 'text'});
  }

  public postProduct(product: Omit<ProductModel, 'id'>): Observable<any> {
    return this.http.post('http://localhost:3000/add-product', product, {responseType: 'text'});
  }

  public updateProducts(): void{
    this.http.get<ProductModel[]>('http://localhost:3000/get-products')
      .pipe(filter(data => !!data), first())
      .subscribe( products => this.productsSource$.next(products))
  }
}
