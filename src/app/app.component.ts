import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    
  ){}
  iniciarSesion(status:boolean){
  console.log(status)
  this.isLogin = status;
  alert('Sesión inciada');
  }
  isLogin:boolean = false;
  title = 'web-demo';
}
