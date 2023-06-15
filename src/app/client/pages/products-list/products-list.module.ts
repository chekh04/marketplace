import {NgModule} from "@angular/core";
import {ProductsListComponent} from "./products-list.component";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ProductModule} from "./product/product.module";
import {ProductsListRoutingModule} from "./products-list-routing.module";
import {ProductDetailsModule} from "../product-details/product-details.module";


@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    ProductsListRoutingModule,
    ProductDetailsModule,
    ProductModule
  ]
})

export class ProductsListModule {}
