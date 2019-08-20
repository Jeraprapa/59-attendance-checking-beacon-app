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
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.data = this.datapass.dataeventreport ;
  }

  ngOnInit() {
  }

  eventlist(parameters: { eventIDs: number }) {
    this.eventIDs = parameters.eventIDs;
    // alert(this.eventIDs);
    this.datapass.eid_report = this.eventIDs;
    this.roter.navigateByUrl('event-detail-report');
  }
}
