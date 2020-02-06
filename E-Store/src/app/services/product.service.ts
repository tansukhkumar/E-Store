 
import { Injectable } from '@angular/core';


import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedProduct: Product;
  product: Product[];
  readonly url = 'http://localhost:3000/product';

  constructor(private http : HttpClient) { }

  postProduct(p){
    return this.http.post(this.url,p);
  }

  getProductList(){
    return this.http.get(this.url);
  }

  putProduct(p){
    return this.http.put(this.url + '/${p._id}',p);
  }

  deleteProduct(_id:string) {
    return this.http.delete(this.url + '/${p._id}');
  }
   
}
