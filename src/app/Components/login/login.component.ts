import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/user.service';
import { AuthService } from 'src/app/Services/auth.service';
import { ErrorsStateMatcher } from 'src/app/Error-state-matcher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  //Declaration
  //Check the form is submitted or not yet
  isSubmited: boolean = false;
  //Hide attribute for the password input
  hide: boolean = true;
  //Login is failed case
  isLoginFailed = false;
  //To display Login Error in case of failure
  errorMessage = '';

  //form validators
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  //get all Form Fields
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  // match errors in the submition of form
  matcher = new ErrorsStateMatcher();

  // submit fntc
  onSubmit() {
    const LoginInfo = {
      email: this.email?.value,
      password: this.password?.value,
    };
    if (this.form.valid) {
      this.userService.signIn(LoginInfo).subscribe({
        next: (data: any) => {
          this.authService.saveToken(data.token);
          this.isLoginFailed = false;
          window.location.reload();
        },
        error: (err: Error) => {
          this.errorMessage = err.message;
          this.isLoginFailed = true;
          this._snackBar.open(this.errorMessage, '❌');
        },
      });
    } else {
      this._snackBar.open('Enter a valid informations !!!', '❌');
    }
  }
}
