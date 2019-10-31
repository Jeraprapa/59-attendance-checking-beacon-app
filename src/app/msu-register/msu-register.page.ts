import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-msu-register',
  templateUrl: './msu-register.page.html',
  styleUrls: ['./msu-register.page.scss'],
})
export class MsuRegisterPage implements OnInit {
  img;
  msuname;
  msusername;
  phone;
  password;
  email;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP, private camera: Camera) {
    this.msuname = this.datapass.fname;
    this.msusername = this.datapass.lname;
  }

  ngOnInit() {
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
  ok() {
    this.http.post('http://acb.msuproject.net/webservice/register',
        {name : this.msuname, surname : this.msusername, image : this.img, email : this.email, tel : this.phone,
          password : this.datapass.pass_msuid, msuid : this.datapass.msuid}, {}).then(value => {
      console.log(JSON.stringify(value.data));
      this.roter.navigateByUrl('welcome');
    }).catch(reason => {
      alert('no');
    });
  }
}
