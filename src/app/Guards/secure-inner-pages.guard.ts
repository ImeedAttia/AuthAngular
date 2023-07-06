import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SecureInnerPagesGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router,
    private _snackBar: MatSnackBar,
    private jwtHelper: JwtHelperService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the user is already logged in and the token is not expired
    if (
      this.authService.getToken() &&
      !this.jwtHelper.isTokenExpired(this.authService.getToken())
    ) {
      this._snackBar.open('Access Denied, You are already logged in!', '❌');
      this.router.navigate(['/Home'], {
        queryParams: { returnUrl: state.url },
      });
    }
    return true;
  }
}
