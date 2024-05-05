import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/LoginRequest';
import { AuthService } from 'src/app/services/auth-service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRequest : LoginRequest = new LoginRequest();
  nbrAttempts : number =0;
 // captcha: string;
  //resolvedCaptcha : boolean = false;
  passwordExpired : boolean = false ;
  constructor(private authService : AuthService,
    private router : Router) { }
  ngOnInit(){

    this.nbrAttempts  +=Number(localStorage.getItem("nbrAttempts"));
     if(this.nbrAttempts == null )
     {
      this.nbrAttempts=0;
     }
    console.log("nbr attempt ",this.nbrAttempts);
  }

  doLogin(){
    this.authService.login(this.loginRequest).subscribe({

      error: () => {
        console.log("error");
        this.nbrAttempts += 1;
        // this.nbrAttempt= this.nbrAttempts.toString();
         localStorage.setItem("nbrAttempts",  this.nbrAttempts.toString());
         //if(Number(localStorage.getItem("nbrAttempts"))>3)
         //{
         // this.resolvedCaptcha = false;
        //}
        },
      next : (res:any) =>
      {
        this.router.navigate(['/home']);
        localStorage.setItem("ACCESS_TOKEN", res.jwt);
        localStorage.setItem("nbrAttempts", "0");
        let decodedToken = this.authService.getDecodedToken();
        //this.passwordExpired = decodedToken.passwordExpired;
        console.log(this.passwordExpired);
        if (this.passwordExpired) {
          localStorage.setItem("passwordExpired",  this.passwordExpired.toString());
          this.router.navigate(['/update-password']);
         // this.notifService.notifInfo("Votre mot de passe a expiré, vous devez le renouveler")
        }
        else
        {
          localStorage.setItem("passwordExpired", "false");
          console.log(localStorage.getItem("passwordExpired"));
        }
      }
    }
    )
  }

}
