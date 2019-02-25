import { Component, OnInit } from '@angular/core';
import { FireauthService} from '../fireauth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public email;
public password;
public errorMessage;
public successMessage;
  constructor(public auth: FireauthService) { }

  ngOnInit() {
  }

  register() {
    this.auth.fireRegister(this.email, this.password).then(res => {
      console.log(res)
      this.errorMessage = '';
      this.successMessage = 'Accout got Created';
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = '';
    });
  }
}
