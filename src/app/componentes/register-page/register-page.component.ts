import { Component, OnInit } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { FlashMessagesService } from 'ngx-flash-messages';

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
    public flashMessagesService: FlashMessagesService 

  ) { }

  ngOnInit() {
  }
onSubmitAddUser(){
  this.authService.registerUser(this.email, this.password)
  .then( (res) => {
    this.flashMessagesService.show('Usuario Creado Correctamente.',
    
    {classes : ['alert','alert-success'], 
    timeout: 4000});
   this.router.navigate(['/privado']);
  }).catch ( (err) => {
    this.flashMessagesService.show(err.message, 
      {classes : ['alert','alert-danger'], 
      timeout: 4000});
         
  });
}
}
