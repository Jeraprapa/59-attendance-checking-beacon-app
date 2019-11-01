import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import * as moment from 'moment';


@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.page.html',
  styleUrls: ['./new-event.page.scss'],
})
export class NewEventPage implements OnInit {
  status;
  des;
  datestart;
  timestart;
  datestop;
  timestop;
  name;
  q1 = '';
  q2 = '';
  uid;
  date = new Date();
    mindate;
    mintime;
    mindate2;
    timenow = moment().format('HH:mm');
    datenow = moment().format('YYYY-MM-DD');
    timestart1;
    mindate1;
    timestop1;
    maxdate;
    datestartc;
    maxtime;
    c;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
      this.uid = this.datapass.uid;
      this.mindate2 = this.datenow + 'T' + this.timenow;
      this.mindate1 = this.datenow;
      this.timestop1 = this.timenow;
      console.log(this.mindate2);
      console.log(this.timenow);
      this.mintime = Math.random().toString(36).toUpperCase().substring(2, 3) + Math.random().toString(36).substring(2, 6);
      console.log(this.mintime);

  }
  ngOnInit() {
  }


  ok() {
      this.mindate = Date.parse(this.mindate2);
      console.log(this.mindate);
    this.http.post('http://acb.msuproject.net/webservice/newEvent',
        {  name: this.name,
          UserID: this.uid,
          Date_start : this.datestart,
          Date_stop : this.datestop,
          Time_start : this.timestart,
          Time_stop: this.timestop,
          detail : this.des,
          status : this.status,
          Q1 : this.q1,
          Q2 : this.q2}, {}).then(value => {
      alert('complete');
      this.roter.navigateByUrl('home');
    }).catch(reason => {
      alert('no');
    });
  }
    onchange($event) {
        this.datestartc = $event;
        if ($event === this.datenow) {
            this.timestart1 = this.timenow;
        } else {
            this.timestart1 = '00:00' ;
        }
        this.mindate1 = $event;
    }

    onchange1($event) {
        if ($event === this.datestartc) {
            this.timestop1 = this.timestart1;
        } else {
            this.timestop1 = '00:00' ;
        }
        this.maxdate = $event;
    }

    onchange2($event) {
        this.maxtime = $event;
    }

    onchange3($event) {
        if ($event === 'private') {
            this.c = 1;
            console.log(this.status);
        } else {
            this.c = 0;
            this.q1 = '';
            this.q2 = '';
            console.log(this.status);
        }
    }
}
