import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private roter: Router) { }

  ngOnInit() {
  }

    login() {
      this.roter.navigateByUrl('login');
    }

  member() {
    this.roter.navigateByUrl('regist');
  }

  msu() {
    this.roter.navigateByUrl('general-register');
  }
}
