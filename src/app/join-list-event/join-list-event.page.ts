import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

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
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      console.log(reason);
    });
  }

  cpuuid(parameters: {cpid: number}) {
    this.cpid = parameters.cpid;
    this.datapass.cpcheck = this.cpid;
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
  check() {
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
}
