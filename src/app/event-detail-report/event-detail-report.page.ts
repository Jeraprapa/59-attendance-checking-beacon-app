import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-event-detail-report',
  templateUrl: './event-detail-report.page.html',
  styleUrls: ['./event-detail-report.page.scss'],
})
export class EventDetailReportPage implements OnInit {
  datae;
  name;
  detail;
  dstart;
  dstop;
  tstart;
  tstop;
  status;
  codeid;
  datacplist;
  cpids;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.eventlist();
    this.infoevent();
  }

  ngOnInit() {
  }
  eventlist() {
    this.http.get('http://acb.msuproject.net/webservice/listCheckpoint/' + this.datapass.eid_report,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
       this.datacplist = jsondata;
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      // alert('no...');
      console.log(reason);
    });
  }

  infoevent() {
    this.http.get('http://acb.msuproject.net/webservice/event/' + this.datapass.eid_report,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datae = jsondata;
      this.detail = this.datae[0].detail;
      this.dstart = this.datae[0].Date_start;
      this.dstop = this.datae[0].Date_stop;
      this.tstart = this.datae[0].Time_start;
      this.tstop = this.datae[0].Time_stop;
      this.status = this.datae[0].status;
      this.name = this.datae[0].name;
      this.codeid =  this.datapass.eid_report;
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      console.log(reason);
    });
  }
  cpdetail(parameters: { cpids: number }) {
    this.cpids = parameters.cpids;
    this.datapass.cpuidreport = this.cpids;
    this.roter.navigateByUrl('checkpoint-report');
  }


}
