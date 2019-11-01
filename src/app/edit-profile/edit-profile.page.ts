import { Component, OnInit } from '@angular/core';
import {DatapassService} from '../datapass.service';
import {Router} from '@angular/router';
import {HTTP} from '@ionic-native/http/ngx';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  img;
  name;
  surname;
  tel;
  password;
  databaseshow;
  myname;
  mytel;
  myimg;
  mysur;
  mymsuid;
  myid;
  mypass;
  database;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP, private camera: Camera) {
    // this.img = this.datapass.img;
    // this.name = this.datapass.name;
    // this.surname = this.datapass.surname;
    // this.tel = this.datapass.tel;
    // this.password = this.datapass.pwd;
    console.log(this.datapass.uid);
    // this.show();
    this.login();
  }

  ngOnInit() {

  }

  change() {
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 80,
      targetHeight: 80,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then(value => {
      this.myimg = 'data:image/jpeg;base64,' + value;

    }).catch(reason => {

    });
  }

  editprofile() {
    this.http.post('http://acb.msuproject.net/webservice/editMember/' + this.datapass.uid,
        {
          name: this.myname,
          surname : this.mysur,
          image : this.myimg,
          tel: this.mytel,
          password : this.mypass
        }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.roter.navigateByUrl('showprofile');
    }).catch(reason => {
      alert('no');
    });
  }
  show() {
    this.http.get('http://acb.msuproject.net/webservice/user/' + this.datapass.uid,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.databaseshow = jsondata;
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      console.log(reason);
    });
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
      this.mypass = this.database[0].password;
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      console.log(reason);
    });
  }
}
