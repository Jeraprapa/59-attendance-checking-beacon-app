import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username;
  password;
  database;
  databasefb;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP, private fb: Facebook) { }

  ngOnInit() {
  }

  login() {
    this.http.post('http://acb.msuproject.net/webservice/login',
        {  email : this.username, password : this.password}, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.database = jsondata;
      this.datapass.uid = this.database[0].userID;
      this.datapass.uname = this.username;
      this.datapass.pwd = this.password;
      this.datapass.name = this.database[0].name;
      this.datapass.surname = this.database[0].surname;
      this.datapass.tel = this.database[0].tel;
      this.datapass.msu = this.database[0].MSU_ID;
      this.datapass.img = this.database[0].image;
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

    fblogin() {
      this.fb.login(['email', 'public_profile'])
          .then((response: FacebookLoginResponse) => {
            this.fb.api('me?fields=id,name,email,first_name,last_name,',
                []).then(profile => {
              this.http.post('http://acb.msuproject.net/webservice/loginFacebook',
                  {email: profile.email }, {}).then(value => {
                let jsondata = JSON.parse(value.data);
                this.databasefb = jsondata;
                this.datapass.uid = this.databasefb[0].userID;
                this.datapass.uname = this.databasefb[0].username;
                this.datapass.pwd = this.databasefb[0].password;
                this.datapass.name = this.databasefb[0].name;
                this.datapass.surname = this.databasefb[0].surname;
                this.datapass.tel = this.databasefb[0].tel;
                this.datapass.msu = this.databasefb[0].MSU_ID;
                this.datapass.img = this.databasefb[0].image;
                this.datapass.facebookID = this.databasefb[0].facebookID;
                this.roter.navigateByUrl('home');
              }).catch(reason => {
                // this.datapasssing.facebookdata = profile;
                // this.router.navigateByUrl('siginfacebook');
                this.datapass.datafb = profile;
                this.roter.navigateByUrl('facebook-register');
              });
            });
          }).catch(reason => alert('Login Fail'));
    }
}
