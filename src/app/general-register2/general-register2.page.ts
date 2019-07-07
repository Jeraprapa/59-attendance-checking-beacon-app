import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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
  data;
  msuid = '';
  password;
  database;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP, private camera: Camera) { }

  ngOnInit() {
  }

  register() {
    console.log(this.name + ' ' + this.password + ' ' + this.email + ' ' + this.surname + ' ' + this.msuid + ' ' + this.phone
        + ' ' + this.img);
    this.http.post('http://acb.msuproject.net/webservice/register',
        {name : this.name, surname : this.surname, image : this.img, email : this.email, tel : this.phone,
          password : this.password, msuid : this.msuid}, {}).then(value => {
      alert(JSON.stringify(value.data));
       this.roter.navigateByUrl('login');
    }).catch(reason => {
        alert('no');
    });
  }

  photo() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then(value => {
      this.img = 'data:image/jpeg;base64,' + value;
    }).catch(reason => {

    });
  }
}
