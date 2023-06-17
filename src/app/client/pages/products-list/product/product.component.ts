import {Component, Input} from '@angular/core';
import {ProductModel} from "../../../../core/models/product.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product!: ProductModel;

  constructor(private router: Router) {

  }

  public editProduct(id: number) {
    this.router.navigate(['/client/add-product'], {queryParams: {id}})
  }

}
