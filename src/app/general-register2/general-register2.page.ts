import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AlertController} from '@ionic/angular';

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
  g: FormGroup;
  i;
  emailmember;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP, private camera: Camera,
              private fb: Facebook, private formBuilder: FormBuilder, private alertCtrl: AlertController) {
    this.checkemail();
    this.g = this.formBuilder.group({
      email: [null, Validators.compose([Validators.pattern('^[a-zA-Z0-9_.-]+@["hotmail"|"gmail"]+.["com"|"ac.th"]+$'),
        Validators.required])],
      password: [null, Validators.compose([Validators.pattern('^[a-zA-Z0-9_.-]+$'),
        Validators.required])],
      name: [null, Validators.compose([Validators.pattern('^[a-zA-Z0-9ก-๙]+$'),
        Validators.required])],
      surname: [null, Validators.compose([Validators.pattern('^[a-zA-Z0-9ก-๙]+$'),
        Validators.required])],
      // phone: [null, Validators.compose([Validators.pattern('^[0-9]+$'),
      //   Validators.required])]
    });

  }

  ngOnInit() {
  }

  register() {
    if (this.i === 1) {
      alert('มีผู้ใช้งานอีเมลนี้แล้ว');
    } else {
      this.http.post('http://acb.msuproject.net/webservice/register',
          {name : this.name, surname : this.surname, image : this.img, email : this.email, tel : this.phone,
            password : this.password, msuid : this.msuid}, {}).then(value => {
        console.log(JSON.stringify(value.data));
        this.roter.navigateByUrl('login');
      }).catch(reason => {
        alert('no');
      });
    }

  }
  checkemail () {
    this.http.get('http://acb.msuproject.net/webservice/emailuser',
        {}, {}).then(value => {
      console.log(JSON.stringify(value.data));
      let jsondata = JSON.parse(value.data);
      this.emailmember = jsondata;
      for (let n = 0; n < this.emailmember.length ; n++) {
        if (this.emailmember[n].userID === this.datapass.uid) {
          this.i = 1;
        }
      }
    }).catch(reason => {
      alert('no');
    });
  }
  async selectPhoto() {
    const alert = await this.alertCtrl.create({
      header: 'Select',
      buttons: [
        {
          text: 'Camera',
          handler: (blah) => {
            const options: CameraOptions = {
              quality: 80,
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
        }, {
          text: 'Libary',
          handler: () => {
            const options: CameraOptions = {
              quality: 80,
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
      ]
    });
    await alert.present();
  }
}
