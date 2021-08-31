import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  btnDisabled = false;
  error: any;
  type = 'buyer';
  btnText = 'Login';
  processing = false;
  userProfile:any;
  constructor() { }

  ngOnInit() {
  }

}
