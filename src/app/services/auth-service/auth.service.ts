import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginRequest } from 'src/app/models/LoginRequest';
import { environment } from 'src/environments/environment';
const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest) {
    return this.http.post(`${environment.apiUrl}/auth/login`, loginRequest);
  }

  getDecodedToken() {

  }
}
