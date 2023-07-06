import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';

const TOKEN_KEY = 'TOKEN_KEY';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getUser(): string | null {
    const jwtToken = this.getToken();
    const decodedToken: any =
      this.getToken() != null ? jwt_decode(jwtToken as string) : null;
    const userId = decodedToken != null ? decodedToken?.sub : null;
    return userId;
  }
  public getUserId(): string | null {
    const jwtToken = this.getToken();
    const decodedToken: any =
      this.getToken() != null ? jwt_decode(jwtToken as string) : null;
    const userId = decodedToken != null ? decodedToken?.id : null;
    return userId;
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY) !== null
      ? window.sessionStorage.getItem(TOKEN_KEY)
      : null;
  }

  public getRole() {
    const jwtToken = this.getToken();
    const decodedToken: any =
      this.getToken() != null ? jwt_decode(jwtToken as string) : null;
    const userRole = decodedToken != null ? decodedToken?.Role : null;
    return userRole;
  }

  signOut(): void {
    window.sessionStorage.clear();
    this.router.navigate(['/Home']).then(() => {
      window.location.reload();
    });
  }
}
