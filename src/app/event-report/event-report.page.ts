import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-event-report',
  templateUrl: './event-report.page.html',
  styleUrls: ['./event-report.page.scss'],
})
export class EventReportPage implements OnInit {
  data;
  eventIDs;
  eventname = '';
  datestart = '';
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    // this.data = this.datapass.dataeventreport ;
  }

  ngOnInit() {
  }

  eventlist(parameters: { eventIDs: number }) {
    this.eventIDs = parameters.eventIDs;
    // alert(this.eventIDs);
    this.datapass.eid_report = this.eventIDs;
    this.roter.navigateByUrl('event-detail-report');
  }

  ok(param: { datestart; eventname }) {
    // name , Date , Time , Date_start : this.datestart
    console.log(this.eventname + ' ' + this.datestart);
    this.http.post('http://acb.msuproject.net/webservice/eventsearch/' + this.datapass.uid,
        {
          name : this.eventname,
          Date: this.datestart
        }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.data = jsondata;
      // alert('complete');
      this.roter.navigateByUrl('home');
    }).catch(reason => {
      alert('no');
    });
  }
}
