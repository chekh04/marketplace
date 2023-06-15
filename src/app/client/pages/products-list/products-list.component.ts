import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../core/product.service";
import {ProductModel} from "../../../core/models/product.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public readonly products$ = this.productService.products$;
  public product: ProductModel = {
    description: 'sjjsbkdlsdnls',
    productName: 'sdkbskdbsld',
    price: '19',
    id: '323wewlkb32jd'
  }

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.updateProducts();
  }

}
