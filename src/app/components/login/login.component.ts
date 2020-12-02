import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  @Output() startedSession : EventEmitter<boolean>
  Login:boolean = false;
  constructor() {
   this.startedSession = new EventEmitter();
   }
   login(){
     this.Login = true;
     this.startedSession.emit(this.Login)
     
   }

  ngOnInit(): void {
  }
}
