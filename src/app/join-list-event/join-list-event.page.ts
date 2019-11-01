import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import * as moment from 'moment';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-join-list-event',
  templateUrl: './join-list-event.page.html',
  styleUrls: ['./join-list-event.page.scss'],
})
export class JoinListEventPage implements OnInit {
  joinIDs;
  cplist;
  cpid;
  eventdata;
  ename;
  dstart;
  dstop;
  tstart;
  tstop;
  status;
  detail;
  datachecker;
  checkerid;
  c = 1;
  dt;
  dt2;
  timenow = moment().format('HH:mm');
  datenow = moment().format('YYYY-MM-DD');
  dtn;
  dts;
  dtse;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.joinIDs = this.datapass.join_id;
    this.showcplist();
    this.showdataevent();
    this.checker();
  }

  ngOnInit() {
  }

  showcplist() {
    this.http.get('http://acb.msuproject.net/webservice/listCheckpoint/' + this.datapass.eid,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
       this.cplist = jsondata;
       this.datapass.cplistid = this.cplist[0].cpID;
      this.dt = this.datenow + 'T' + this.timenow;
      this.dtn = Date.parse(this.dt);
      this.dts = this.cplist[0].Date_start + 'T' + this.cplist[0].Time_start;
      this.dt2 = Date.parse(this.dts);
      console.log('nowd ' + this.dt);
      console.log(this.dts);
      if (this.dt2 < this.dtn) {
        console.log('now' + this.dtn);
        console.log(this.dt2);
        this.c = 0;
      } else {
        this.c = 1;
      }
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      console.log(reason);
    });
  }

  cpuuid(parameters: {cpid: number , distance: number}) {
    this.cpid = parameters.cpid;
    this.datapass.cpcheck = this.cpid;
    this.datapass.distancecp = parameters.distance;
    if (this.checkerid === this.datapass.uid) {
      this.roter.navigateByUrl('attend');
    } else {
      this.roter.navigateByUrl('join-check');
    }
  }

  showdataevent() {
    this.http.get('http://acb.msuproject.net/webservice/event/' + this.datapass.eid,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.eventdata = jsondata;
      this.ename = this.eventdata[0].name;
      this.dstart = this.eventdata[0].Date_start;
      this.dstop = this.eventdata[0].Date_stop;
      this.tstart = this.eventdata[0].Time_start;
      this.tstop = this.eventdata[0].Time_stop;
      this.status = this.eventdata[0].status;
      this.detail = this.eventdata[0].detail;
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      console.log(reason);
    });
  }

  checker () {
    this.http.get('http://acb.msuproject.net/webservice/listChecker/' + this.datapass.eid,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datachecker = jsondata;
      this.checkerid = this.datachecker[0].userID;
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      console.log(reason);
    });

  }

  delete() {
    this.http.get('http://acb.msuproject.net/webservice/joinDel/' + this.joinIDs,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      alert('delete checkpoint');
      this.roter.navigateByUrl('join-list');
    }).catch(reason => {
      console.log(reason);
    });
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.showcplist();
      this.showdataevent();
      this.checker();
      event.target.complete();
    }, 1000);
  }
}
