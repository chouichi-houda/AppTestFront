import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private router : Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.indexOf('/login') === -1 && request.url.indexOf('/websocket') === -1 && !request.url.startsWith(".")){
      let token = localStorage.getItem("ACCESS_TOKEN");
      if(token){
        request = request.clone({
          setHeaders: {
            'Authorization': "Bearer " + token
          }
        });
      }else{
        this.router.navigate(['/login'])
      }

    }

    return next.handle(request);
  }
}
