import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-join-event',
  templateUrl: './join-event.page.html',
  styleUrls: ['./join-event.page.scss'],
})
export class JoinEventPage implements OnInit {
  ecode;
  a1 = '';
  a2 = '';
  status = 'approved' ;
  datacode;
  datae;
  estatus;
  c = 0;
  c2 = 0;
  q1 = '';
  q2 = '';
  i = 0;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP, private barcodeScanner: BarcodeScanner) {
  }
  ngOnInit() {
  }
   join() {
    // if (this.i === 0) {
      this.ae();
    // }
    // this.i++;
    // if (this.i === 2) {
    //   this.newjoin();
    //   this.i = 0;
    // }
  }

  Qrcode() {
      this.barcodeScanner.scan().then(barcodeData => {
        this.http.get('http://acb.msuproject.net/webservice/event/' + barcodeData.text,
            { }, {}).then(async value => {
          let jsondata = JSON.parse(value.data);
          this.datae = jsondata;
          this.estatus = this.datae[0].status;
          this.datapass.eq1 = this.datae[0].Question1;
          this.datapass.eq2 = this.datae[0].Question2;
          console.log(JSON.stringify(jsondata));
          console.log('test ' + this.datapass.eq2.length);
          if (this.datapass.eq2.length > 0 || this.datapass.eq1.length > 0) {
            this.datapass.ecode = this.ecode;
            this.roter.navigateByUrl('q-event');
          } else {
            this.newjoin();
          }
        }).catch(reason => {
          console.log(reason);
        });
      }).catch(err => {
        console.log('Error', err);
      });
  }
  newjoin() {
    console.log(this.datapass.uid);
    console.log(this.ecode);
    console.log(this.q1);
    console.log(this.q2);
    console.log(this.status);
    this.http.post('http://acb.msuproject.net/webservice/newJoin',
        {
          userID : this.datapass.uid,
          eventID : this.ecode,
          A1 : this.q1,
          A2 : this.q2,
          status : this.status}, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datacode = jsondata;
      alert('success');
      console.log(this.datacode);
      this.roter.navigateByUrl('home');
    }).catch(reason => {
      alert('no');
    });
  }

  ae () {
    this.http.get('http://acb.msuproject.net/webservice/event/' + this.ecode,
        { }, {}).then(async value => {
      let jsondata = JSON.parse(value.data);
      this.datae = jsondata;
      this.estatus = this.datae[0].status;
      this.datapass.eq1 = this.datae[0].Question1;
      this.datapass.eq2 = this.datae[0].Question2;
      console.log(JSON.stringify(jsondata));
      console.log('test ' + this.datapass.eq2.length);
      if (this.datapass.eq2.length > 0 || this.datapass.eq1.length > 0) {
        this.datapass.ecode = this.ecode;
        this.roter.navigateByUrl('q-event');
      } else {
        this.newjoin();
      }
    }).catch(reason => {
      console.log(reason);
    });
  }

}
