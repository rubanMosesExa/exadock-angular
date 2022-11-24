import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})


export class LoginFormComponent {
  userName = new FormControl(null);
  password = new FormControl(null);
  @Output() login: EventEmitter<any> = new EventEmitter();


  onSubmit() {
    this.login.emit({ username: this.userName.value, password: this.password.value });
  }

}
