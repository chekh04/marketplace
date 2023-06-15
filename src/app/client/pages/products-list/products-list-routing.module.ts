import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProductsListComponent} from "./products-list.component";
import {ProductDetailsComponent} from "../product-details/product-details.component";

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
    children: [

    ]
  },
  {
    path: ':id',
    component: ProductDetailsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsListRoutingModule {
}
