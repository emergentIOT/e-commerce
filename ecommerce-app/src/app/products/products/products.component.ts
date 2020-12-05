import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Observable<any> | undefined;
  
  constructor(
    private _productService: ProductDataService
  ) { }

  ngOnInit() {
    this.products = this._productService.getAllProducts();
    console.log("products", this.products);
  }

}
