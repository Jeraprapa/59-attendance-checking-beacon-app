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
  msuid;
  email;
  oldimg;
  oldname;
  oldsurname;
  imgnew;
  oldtel;
  oldpassword;
  oldmsuid;
  oldemail;
  databaseshow;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP, private camera: Camera) {
    this.show();
  }

  ngOnInit() {
    this.img = this.datapass.img;
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
      this.img = 'data:image/jpeg;base64,' + value;

    }).catch(reason => {

    });
  }

  editprofile() {
    this.http.post('http://acb.msuproject.net/webservice/editMember/' + this.datapass.uid,
        {
          name: this.name,
          surname : this.surname,
          image : this.img,
          email : this.datapass.uname,
          tel: this.tel,
          password : this.password,
          msuid : this.oldmsuid
        }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
     // this.database = jsondata;

      // alert(JSON.stringify(this.database));
      this.roter.navigateByUrl('showprofile');
    }).catch(reason => {
      alert('no');
    });
  }
  show() {
    this.http.get('http://acb.msuproject.net/webservice/user/' + this.datapass.uid,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
     // this.datapass.dataevent = jsondata;
       this.databaseshow = jsondata;
      this.oldname = this.databaseshow[0].name;
      this.oldimg = this.databaseshow[0].image;
      this.oldsurname = this.databaseshow[0].surname;
      this.oldtel = this.databaseshow[0].tel;
      this.oldpassword = this.databaseshow[0].password;
      this.oldmsuid = this.databaseshow[0].msuid;
      this.oldemail = this.databaseshow[0].email;
      console.log(JSON.stringify(jsondata));
     // this.roter.navigateByUrl('event-list');
    }).catch(reason => {
      console.log(reason);
    });
  }
}
