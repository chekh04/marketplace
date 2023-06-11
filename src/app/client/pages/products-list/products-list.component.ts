import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../core/product.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public readonly products$ = this.productService.products$;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.updateProducts();
  }

}
