import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-q-event',
  templateUrl: './q-event.page.html',
  styleUrls: ['./q-event.page.scss'],
})
export class QEventPage implements OnInit {
  q1 = '';
  q2 = '';
  dataevent;
  status = 'unapproved' ;
  datacode;
  eq1;
  eq2;
  c = 0;
  c2 = 0;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.infoevent();
  }

  ngOnInit() {
  }
  infoevent() {
    this.http.get('http://acb.msuproject.net/webservice/event/' + this.datapass.ecode,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.dataevent = jsondata;
      this.eq1 = this.dataevent[0].Question1;
      this.eq2 = this.dataevent[0].Question2;
      // this.detail = this.datae[0].detail;
      // this.dstart = this.datae[0].Date_start;
      // this.dstop = this.datae[0].Date_stop;
      // this.tstart = this.datae[0].Time_start;
      // this.tstop = this.datae[0].Time_stop;
      // this.status = this.datae[0].status;
      // this.name = this.datae[0].name;
      // this.codeid =  this.datapass.eid_report;
      if (this.eq1.length > 0) {
        // console.log('ว่างนะ');
        this.c = 1;
        // this.status = 'unapproved';
        // this.roter.navigateByUrl('home');
      }
      if (this.eq2.length > 0 ) {
        // console.log('ว่างนะ');
        this.c2 = 1;
        // this.status = 'unapproved';
        // this.roter.navigateByUrl('home');
      }
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      console.log(reason);
    });
  }
  newjoin() {
    this.http.post('http://acb.msuproject.net/webservice/newJoin',
        { userID : this.datapass.uid,
          eventID : this.datapass.ecode,
          A1 : this.q1,
          A2 : this.q2,
          status : this.status}, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datacode = jsondata;
      alert('success');
      this.roter.navigateByUrl('home');
    }).catch(reason => {
      alert('no');
    });
  }

  ok() {
    this.newjoin();
  }
}
