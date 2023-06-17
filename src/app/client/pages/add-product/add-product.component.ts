import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../core/product.service";
import { filter, first, mergeMap, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public form: FormGroup;
  public editMode = false;
  private editedProductId: number | null = null;

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.form = this.getFormGroup();
  }

  ngOnInit(): void {
    this.patchValueOnEditMode();
  }
  editProduct(data: Omit<ProductModel, 'id'>) {
    const body: ProductModel = {
      ...data,
      id: this.editedProductId as number
    }
    this.productService.updateProductById(body)
    .pipe(first())
    .subscribe(() => {
      this.router.navigateByUrl('/client/products');
    });
  }
  

  public addProduct(formGroup: FormGroup): void {
    if(formGroup.invalid) {
      return;
    }
    const {price, description, productName} = formGroup.value;
    const body = {
      price,
      description,
      title: productName
    }

    this.productService.postProduct(body)
    .pipe(first()).subscribe(() => {
      this.form.reset();
    })
  }
  private patchValueOnEditMode(): void {
    this.activatedRoute.queryParams
    .pipe(
      first(),
      mergeMap(({id}) => {
        if(id) return this.productService.getProductById(id);
        return of(null);
      }),
      filter(data => !!data))
      .subscribe(({title, description, price, id}) => {
        this.editMode = true;
        this.editedProductId = id;
      this.form.patchValue({
        productName: title,
        description,
        price
      })
      
    })
  }

  private getFormGroup(): FormGroup {
    return this.fb.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    })
  }

}
