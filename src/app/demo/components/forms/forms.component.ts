import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "@models";
import {PRODUCT_CREATE_FORM} from "./product.form";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  form: FormGroup = new FormGroup({
    'id': new FormControl(null, [Validators.required, Validators.min(1)]),
    'name': new FormControl(null, [Validators.required]),
    'price': new FormControl(100),
    'category': new FormControl('Food'),
  })

  constructor(
    builder: FormBuilder,
    private readonly $productServ: ProductService
  ) {
    this.form = builder.group(PRODUCT_CREATE_FORM)
  }

  onSubmit() {
    if( this.form.valid ){
      const product: Product = this.form.value;
      this.$productServ.add( product );
      this.form.reset();
    }
  }
}
