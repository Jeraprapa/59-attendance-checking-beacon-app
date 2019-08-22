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
  Detail;
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
      // this.datapass.dataevent = jsondata;
       this.cplist = jsondata;
      // this.datapass.event_name = this.database[0].name;
       this.datapass.cplistid = this.cplist[0].cpID;
      // this.datapass.event_id = this.database[0].eventID;
      console.log(JSON.stringify(jsondata));
      // alert(JSON.stringify(jsondata));
      // alert(JSON.stringify(this.database[0].name));
      // console.log(this.database[0].eventInof[1].name);
      // this.roter.navigateByUrl('event-list');
    }).catch(reason => {
      // alert('no...');
      console.log(reason);
    });
  }

  cpuuid(parameters: {cpid: number}) {
    this.cpid = parameters.cpid;
    this.datapass.cpcheck = this.cpid;
    // this.joinIDs = parameters.joinIDs;
    // this.datapass.join_id = this.joinIDs;
    // this.roter.navigateByUrl('join-check');
    if (this.checkerid === this.datapass.uid) {
      // alert('checker');
      this.roter.navigateByUrl('attend');
    } else {
      this.roter.navigateByUrl('join-check');
    }
  }

  showdataevent() {
    this.http.get('http://acb.msuproject.net/webservice/event/' + this.datapass.eid,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      // this.datapass.dataevent = jsondata;
      this.eventdata = jsondata;
      this.ename = this.eventdata[0].name;
      this.dstart = this.eventdata[0].Date_start;
      this.dstop = this.eventdata[0].Date_stop;
      this.tstart = this.eventdata[0].Time_start;
      this.tstop = this.eventdata[0].Time_stop;
      this.status = this.eventdata[0].status;
      this.detail = this.eventdata[0].detail;
      // this.datapass.event_name = this.database[0].name;
      // this.datapass.event_id = this.database[0].eventID;
      console.log(JSON.stringify(jsondata));
      // alert(JSON.stringify(jsondata));
      // alert(JSON.stringify(this.database[0].name));
      // console.log(this.database[0].eventInof[1].name);
      // this.roter.navigateByUrl('event-list');
    }).catch(reason => {
      // alert('no...');
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
      // this.roter.navigateByUrl('event-list');
    }).catch(reason => {
      // alert('no...');
      console.log(reason);
    });

  }
  check() {
    // this.roter.navigateByUrl('join-check');
  }

  delete() {
    this.http.get('http://acb.msuproject.net/webservice/joinDel/' + this.joinIDs,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      // this.datachecker = jsondata;
      // console.log(JSON.stringify(jsondata));
      // this.roter.navigateByUrl('event-list');
      alert('delete checkpoint');
    }).catch(reason => {
      // alert('no...');
      console.log(reason);
    });
  }
}
