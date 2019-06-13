import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private roter: Router) { }

  ngOnInit() {
  }

  login() {
    this.roter.navigateByUrl('login');
  }

  Register() {
    this.roter.navigateByUrl('register');
  }

    beacon() {
      this.roter.navigateByUrl('attend');
    }
}
