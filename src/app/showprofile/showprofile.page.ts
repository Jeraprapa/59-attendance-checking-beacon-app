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
  database;
  constructor(private roter: Router , private datapass: DatapassService, private  http: HTTP) {
    this.myname = this.datapass.name;
    this.mysur = this.datapass.surname;
    this.mytel = this.datapass.tel;
    this.myimg = this.datapass.img;
    this.mymsuid = this.datapass.msu;
    this.myid = this.datapass.uid;
  }

  ngOnInit() {

  }

  login() {
    this.http.post('http://acb.msuproject.net/webservice/login',
        {  email : this.datapass.uname, password : this.datapass.pwd}, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.database = jsondata;
      this.myid = this.database[0].userID;
      // this.datapass.uname = this.datapass.uname;
      // this.datapass.pwd = this.datapass.pwd;
      this.myname = this.database[0].name;
      this.mysur = this.database[0].surname;
      this.mytel = this.database[0].tel;
      this.mymsuid = this.database[0].MSU_ID;
      this.myimg = this.database[0].image;
      // this.roter.navigateByUrl('showprofile');
    }).catch(reason => {
      alert('no');
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
