import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
