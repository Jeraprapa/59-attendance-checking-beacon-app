import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.page.html',
  styleUrls: ['./approve.page.scss'],
})
export class ApprovePage implements OnInit {
  public isToggled: boolean;
  value;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    // this.myValue();
    this.isToggled = false;
  }

  ngOnInit() {
  }
  public notify() {
    console.log(this.isToggled);
  }

  checker () {


  }
}
