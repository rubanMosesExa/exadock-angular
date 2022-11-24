import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})


export class LoginFormComponent {
  userName: string | undefined;
  password: string | undefined;
  submitButtonDisabled: boolean = true;
  favoriteColorControl = new FormControl('');
  @Output() login: EventEmitter<any> = new EventEmitter();

  onKey(event: any, type: string) {
    console.log("THE event.target.value", event.target.value);
    if (type === "userName") this.userName = event.target.value;
    else if (type === "password") this.password = event.target.value;
    if (this.userName && this.password) this.submitButtonDisabled = false;

  }

  onSubmit() {
    console.log("THE FINAL VALUES ", { userName: this.userName, password: this.password },this.favoriteColorControl.value);
    this.login.emit({ username: this.userName, password: this.password });
  }

}
