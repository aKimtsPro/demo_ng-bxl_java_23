import {AbstractControl, ValidationErrors, Validators} from "@angular/forms";

export const PRODUCT_CREATE_FORM = {
  'id': [ null, [Validators.required, Validators.min(1)] ],
  'name': [ null, [Validators.required] ],
  'price': [ 100, [] ],
  'category': [ 'Food', [categoryInvalid] ]
}


// const validator: ValidatorFn = categoryInvalid;

// Correspond à ValidatorFn
function categoryInvalid(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  const acceptedValues = ['Food', 'Furniture', 'Electronic']
  if( acceptedValues.includes( value ) )
    return null;

  return {
    categoryInvalid: "category should be either 'Food', 'Furniture' or 'Electronic'"
  }
}
