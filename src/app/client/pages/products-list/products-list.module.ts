import {NgModule} from "@angular/core";
import {ProductsListComponent} from "./products-list.component";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ProductModule} from "./product/product.module";

const routes: Routes = [{path: '', component: ProductsListComponent}]

@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductModule
  ]
})

export class ProductsListModule {}
