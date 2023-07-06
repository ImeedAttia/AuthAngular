import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class ErrorsStateMatcher implements ErrorStateMatcher {
  //match errors in the submition : we can add control.touched or control.dirty like : (isSubmitted || control.touched)
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && isSubmitted);
  }
}