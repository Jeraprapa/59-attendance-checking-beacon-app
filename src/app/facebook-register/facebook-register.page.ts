import { Component, OnInit } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-facebook-register',
  templateUrl: './facebook-register.page.html',
  styleUrls: ['./facebook-register.page.scss'],
})
export class FacebookRegisterPage implements OnInit {
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

  fbconnect() {
    this.http.post('http://acb.msuproject.net/webservice/register',
        {name : this.name, surname : this.surname, image : this.img, email : this.datapass.datafb.email, tel : this.phone,
          password : this.password, msuid : this.msuid}, {}).then(value => {
      console.log(JSON.stringify(value.data));
      alert('Register Success');
      this.roter.navigateByUrl('login');
    }).catch(reason => {
      alert('no');
    });
    // this.http.post('http://acb.msuproject.net/webservice/register',
    //     {Name : this.name, lastName : this.surname, email : this.datapass.datafb.email,
    //       phone : this.phone, password : this.password}, {}).then(value => {
    //   alert('Register Success');
    //   // this.http.post('http://parking.msuproject.net/webservice/loginFacebook',
    //   //     {email: this.datapass.datafb.email }, {}).then(data => {
    //   //   let jsondata = JSON.parse(data.data);
    //   //   this.database = jsondata;
    //   //   // this.datapasssing.userID = this.database[0].userID;
    //   //   // this.datapasssing.email = this.database[0].email;
    //   //   // this.datapasssing.password = this.database[0].password;
    //   //   // this.datapasssing.Name = this.database[0].Name;
    //   //   // this.datapasssing.lastName = this.database[0].lastName;
    //   //   // this.datapasssing.phone = this.database[0].phone;
    //   //   // this.datapasssing.status = this.database[0].status;
    //   //   // this.datapasssing.identity = this.database[0].identity;
    //   //   // this.datapasssing.facebookID = this.database[0].facebookID;
    //   //   // this.router.navigateByUrl('parking');
    //   //   console.log(this.database);
    //   // });
    // }).catch(reason => {
    //   alert('no');
    // });
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
