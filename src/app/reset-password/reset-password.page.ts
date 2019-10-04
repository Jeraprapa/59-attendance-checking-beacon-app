import { Component, OnInit } from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
 email;
 newpassword;
  constructor(private  http: HTTP) {
   this.newpassword = Math.random().toString(36).replace('0.', '').substring(0, 6);
  }

  ngOnInit() {
  }

  sendmail() {
    this.http.get('http://acb.msuproject.net/webservice/forgot/' + this.email,
        { password: this.newpassword}, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      console.log(JSON.stringify(jsondata));
      alert('please check email');
    }).catch(reason => {
      console.log(reason);
    });
  }
}
