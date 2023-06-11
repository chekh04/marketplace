import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../core/product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private productService: ProductService) {
    this.form = this.getFormGroup();
  }

  public addProduct(formGroup: FormGroup): void {
    console.log(formGroup)
    if(formGroup.invalid) {
      return;
    }

    this.productService.postProduct(formGroup.value).subscribe()

    console.log(formGroup.value)
  }

  private getFormGroup(): FormGroup {
    return this.fb.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    })
  }

}
