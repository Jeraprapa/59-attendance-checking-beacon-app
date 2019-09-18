import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-general-register2',
  templateUrl: './general-register2.page.html',
  styleUrls: ['./general-register2.page.scss'],
})
export class GeneralRegister2Page implements OnInit {
  email;
  name;
  surname;
  phone;
  img = '';
  msuid = '';
  password;
  database;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP, private camera: Camera, private fb: Facebook) {
    this.name = this.datapass.datafb.first_name;
    this.surname = this.datapass.datafb.last_name;
  }

  ngOnInit() {
  }

  register() {
    this.http.post('http://acb.msuproject.net/webservice/register',
        {name : this.name, surname : this.surname, image : this.img, email : this.email, tel : this.phone,
          password : this.password, msuid : this.msuid}, {}).then(value => {
            console.log(JSON.stringify(value.data));
       this.roter.navigateByUrl('login');
    }).catch(reason => {
        alert('no');
    });
  }

  photo() {
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
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

  clibary() {
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
}
