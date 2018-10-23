import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';
import { timeout } from 'q';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public email:string;
  public password:string;
  constructor(
  public authService: AuthService,
  public router: Router,
  public flashMessagesService: FlashMessagesService
   
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.flashMessagesService.show('Usuario logado Correctamente.', 
      {classes : ['alert','alert-warning'], 
      timeout: 4000});
      this.router.navigate(['/privado']);
    }).catch((err) =>{
      this.flashMessagesService.show(err.message, 
    {classes : ['alert','alert-danger'], 
      timeout: 4000});
      this.router.navigate(['/login']);
    });
    
  }

  onClickGoogleLogin(){
    this.authService.loginGoogle()
    .then((res) =>{
      this.router.navigate(['/privado']);
    }).catch(err => console.log(err.message));
  }

  onClickFacebookLogin(){
    this.authService.loginFacebook()
    .then ((res) => {
      this.router.navigate(['/privado']);
    }).catch( err => console.log(err.message));
  }

}
