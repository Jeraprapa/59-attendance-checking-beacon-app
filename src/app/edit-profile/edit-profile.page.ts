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
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP, private camera: Camera) {
    this.show();
  }

  ngOnInit() {
    this.img = this.datapass.img;
    this.name = this.datapass.name;
    this.surname = this.datapass.surname;
    this.tel = this.datapass.tel;
    this.password = this.datapass.pwd;
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
          tel: this.tel,
          password : this.password
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
}
