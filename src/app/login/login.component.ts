import { Component, OnInit } from '@angular/core';
import { FireauthService} from '../fireauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public email;
public password;
public eMessage;
public sMessage;
  constructor(public auth: FireauthService) { }

  ngOnInit() {
  }
  login() {
    this.auth.firelogin(this.email, this.password).then(res => {
console.log(res)
      this.eMessage = '';
      this.sMessage = 'Login Successfull';
    }, err => {
      console.log(err);
      this.eMessage = err.message;
      this.sMessage = '';
    });
  }


}
