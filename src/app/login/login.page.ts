import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username;
  password;
  database;
  url = 'http://acb.msuproject.net/webservice/login';
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) { }

  ngOnInit() {
  }

  login() {
    // let found = false;
    // let result;
    this.http.post('http://acb.msuproject.net/webservice/login',
        {  email : this.username, password : this.password}, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      // alert(JSON.stringify(value.data));
      this.database = jsondata;
      // JSON.stringify(jsondata);
      this.datapass.uname = this.username;
      this.datapass.pwd = this.password;
      // this.datapass.database = this.database;
      alert(JSON.stringify(this.database));
      // <div>tel: {{database[0].tel}}</div>
      // this.router.navigateByUrl('home');
    }).catch(reason => {
      alert('no');
    });
  }

  Register() {
    this.roter.navigateByUrl('register');
  }

  re() {
    this.roter.navigateByUrl('general-register2');
  }
}
