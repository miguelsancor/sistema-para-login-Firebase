import { Component, OnInit } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import {FlashMessagesService} from 'angular2-flash-messages';

import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService 

  ) { }

  ngOnInit() {
  }
onSubmitAddUser(){
  this.authService.registerUser(this.email, this.password)
  .then( (res) => {
    this.flashMensaje.show('Usuario Creado Correctamente.', 
    {cssClass: 'alert-success', timeout: 4000});
   this.router.navigate(['/privado']);
  }).catch ( (err) => {
    this.flashMensaje.show(err.message, 
    {cssClass: 'alert-danger', timeout: 4000});
        
  });
}
}
