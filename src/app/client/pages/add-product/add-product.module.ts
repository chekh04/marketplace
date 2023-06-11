import {NgModule} from "@angular/core";
import {AddProductComponent} from "./add-product.component";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [{path: '', component: AddProductComponent}]

@NgModule({
  declarations: [AddProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})

export class AddProductModule {

}
