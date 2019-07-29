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
  // url = 'http://acb.msuproject.net/webservice/login';
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) { }

  ngOnInit() {
  }

  login() {
    this.http.post('http://acb.msuproject.net/webservice/login',
        {  email : this.username, password : this.password}, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.database = jsondata;
      this.datapass.uname = this.username;
      this.datapass.pwd = this.password;
      this.datapass.name = this.database[0].name;
      this.datapass.surname = this.database[0].surname;
      this.datapass.tel = this.database[0].tel;
      this.datapass.msu = this.database[0].MSU_ID;
      this.datapass.img = this.database[0].image;
      alert(JSON.stringify(this.database));
      this.roter.navigateByUrl('home');
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
