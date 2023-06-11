import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ClientComponent} from "./client.component";

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'add-product',
        loadChildren: () => import('./pages/add-product/add-product.module').then(m => m.AddProductModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./pages/products-list/products-list.module').then(m => m.ProductsListModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
