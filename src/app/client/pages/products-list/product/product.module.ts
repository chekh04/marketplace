import {NgModule} from "@angular/core";
import {ProductComponent} from "./product.component";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [ProductComponent],
  exports: [ProductComponent],
    imports: [
        RouterLink
    ]
})

export class ProductModule {}
