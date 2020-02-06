import { Product } from './../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { NgForm } from '@angular/forms';

 
@Component({
  selector: 'productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {
  page:Number=1;
  product:Product = new Product("","","",null,"","");

  constructor(private productService : ProductService) {}

  ngOnInit() {
    this.refreshProductList();
  }

  onSubmit(form: NgForm) {
     if(form.value._id == "") {
    console.log(this.product)
    this.productService.postProduct(this.product).subscribe((res) =>
    {
      this.refreshProductList();
    });
   }
  else
  {
    console.log(this.product)
    this.productService.putProduct(this.product).subscribe();
  }
}
    
  refreshProductList() {
    this.productService.getProductList().subscribe((res) => {
      this.productService.product = res as Product[];
    });
    
  }

  onEdit(p: Product) {
    this.product = p;
  }

  onDelete(_id:string) {
    this.productService.deleteProduct(_id).subscribe((res) =>{
      this.refreshProductList();
    })
  }
  
}
