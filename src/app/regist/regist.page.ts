import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.page.html',
  styleUrls: ['./regist.page.scss'],
})
export class RegistPage implements OnInit {

  constructor(private roter: Router) { }

  ngOnInit() {
  }

  login() {
    this.roter.navigateByUrl('login');
  }

}
