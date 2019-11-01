import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import * as moment from 'moment';

@Component({
  selector: 'app-checkpoint',
  templateUrl: './checkpoint.page.html',
  styleUrls: ['./checkpoint.page.scss'],
})
export class CheckpointPage implements OnInit {

  datacplist;
  cpids;
  dates;
  timenow = moment().format('HH:mm:ss');
  datenow = moment().format('YYYY-MM-DD');
  c = 1;
  dt;
  dtn;
  dts;
  dtse;
  datecp;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.cplist();
    this.dt = this.datenow + 'T' + this.timenow;
    this.dtn = Date.parse(this.dt);
    this.dtse = this.datapass.edate + 'T' + this.datapass.etime;
    this.dts = Date.parse(this.dtse);
    console.log('datetimenow: ' + this.dtn);
    console.log('datetimestopevent: ' + this.dts);
    if (this.dtn > this.dts) {
      this.c = 0;
      console.log('c ' + this.c);
    } else {
      this.c = 1;
      console.log('c ' + this.c);
    }
  }

  ngOnInit() {
  }
  cplist() {
    this.http.get('http://acb.msuproject.net/webservice/listCheckpoint/' + this.datapass.event_id,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datapass.dataevent = jsondata;
      this.datacplist = jsondata;
      this.datecp = this.datacplist[0].Date_start;
      console.log(this.datecp);
      this.dates = moment(this.datecp, 'YYYY-MM-DD').format('DD-MM-YYYY');
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      console.log(reason);
    });
  }
  addcp() {

    this.roter.navigateByUrl('new-checkpoint');
  }

  cpdetail(parameters: { cpids: number }) {
    this.cpids = parameters.cpids;
    this.datapass.cpuid = this.cpids;
    this.roter.navigateByUrl('checkpoint-detail');
  }
}
