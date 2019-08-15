import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-general-register',
  templateUrl: './general-register.page.html',
  styleUrls: ['./general-register.page.scss'],
})
export class GeneralRegisterPage implements OnInit {
    password;
    musername;
  constructor(private roter: Router) { }

  ngOnInit() {
  }

  Ok() {
      this.roter.navigateByUrl('msu-register');
  }

}
