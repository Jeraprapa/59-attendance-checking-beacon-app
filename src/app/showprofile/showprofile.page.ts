import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-showprofile',
  templateUrl: './showprofile.page.html',
  styleUrls: ['./showprofile.page.scss'],
})
export class ShowprofilePage implements OnInit {
  myname;
  mytel;
  myimg;
  mysur;
  mymsuid;
  myid;
  myemail;
  mypass;
  database;
  constructor(private roter: Router , private datapass: DatapassService, private  http: HTTP) {
    this.login();
    console.log(this.datapass.uid);
  }

  ngOnInit() {

  }

  login() {
    this.http.get('http://acb.msuproject.net/webservice/user/' + this.datapass.uid,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.database = jsondata;
      this.myid = this.database[0].userID;
      this.myname = this.database[0].name;
      this.mysur = this.database[0].surname;
      this.mytel = this.database[0].tel;
      this.mymsuid = this.database[0].MSU_ID;
      this.myimg = this.database[0].image;
      this.myemail = this.database[0].email;
      this.mypass  = this.database[0].password;
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      console.log(reason);
    });
  }
    myprofile() {
      this.roter.navigateByUrl('edit-profile');
    }

  ok() {
    this.roter.navigateByUrl('home');
  }
  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      this.login();
      event.target.complete();
    }, 1000);
  }
}
