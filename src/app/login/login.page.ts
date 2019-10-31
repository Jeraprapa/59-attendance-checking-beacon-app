import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import {json} from '@angular-devkit/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password;
  msuid = '';
  database;
  databasefb;
  emailfb;
  c = 1;
  a = 1;
  b = 1;
  d = 1;
  as;
  datamsu;
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
          .then((value) => {
            console.log(JSON.stringify(value));
            this.fb.api(value.authResponse.userID + '/?fields=id,email,first_name,last_name', [])
                .then(value1 => {
                  console.log(JSON.stringify(value1));
                 this.databasefb = value1;
                  console.log(JSON.stringify(this.databasefb));
                  this.emailfb = this.databasefb.email;
                  console.log(this.emailfb);
                  this.datapass.datafb = this.databasefb;
                    this.http.post('http://acb.msuproject.net/webservice/loginFacebook',
                        {email: this.emailfb }, {}).then(value2 => {
                      let jsondata = JSON.parse(value2.data);
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
                      console.log(JSON.stringify(reason));
                      this.roter.navigateByUrl('facebook-register');
                    });
                });
            }).catch(eee => {
              console.log(eee);

            });
    }

  forgetp() {
    this.roter.navigateByUrl('reset-password');
  }

  onchange3($event) {
    // console.log(this.username.length);
    if ($event.length > 0) {
      this.a = 0;
      this.b = 0;
      this.c = 1;
      this.d = 1;
    }
  }

  onchange2($event) {
    // console.log($event.length);
    if ($event.length > 0) {
      this.c = 0;
      this.b = 0;
      this.a = 1;
      this.d = 2;
    }
  }

  login2 ( ) {
    this.http.post('http://webservices.csmsu.net/rest/api/Authentication',
        {username: this.msuid, password: this.password}, {'APIKey': '1234'}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datamsu = jsondata;
      this.as = this.datamsu.activeStatus;
      this.msuid = this.datamsu.sysUsername;
      this.datapass.msuid = this.msuid;
      console.log(this.as);
      this.checkstatus();
    }).catch(reason => {
      alert('no');
    });
  }
  checkstatus() {
    if (this.as === true) {
      this.roter.navigateByUrl('home');
    }
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.c = 1;
      this.a = 1;
      this.b = 1;
      this.d = 1;

      event.target.complete();
    }, 2000);
  }
}
