import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

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
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
      this.uid = this.datapass.uid;
  }
  ngOnInit() {
  }


  ok() {
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
}
