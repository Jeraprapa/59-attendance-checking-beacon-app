import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-checkpoint-detail',
  templateUrl: './checkpoint-detail.page.html',
  styleUrls: ['./checkpoint-detail.page.scss'],
})
export class CheckpointDetailPage implements OnInit {
  uid;
  datacpdetail;
  cpid;
  ename;
  dstart;
  area;
  tstart;
  tstop;
  duration;
  cpname;
  datachecker;
  checkeruid;
  c_ID;
  i;
  name;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.cpdetail();
    this.checker();
  }

  ngOnInit() {
  }

  st() {
    // this.uid = this.datapass.cpuid;
     this.roter.navigateByUrl('attend');
    // if (this.checkername === this.datapass.uid) {
    //   alert('checker');
    // }
  }

  cpdetail() {
    this.http.get('http://acb.msuproject.net/webservice/checkpoint/' + this.datapass.cpuid,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      // this.datapass.dataevent = jsondata;
      this.datacpdetail = jsondata;
      this.cpid = this.datacpdetail[0].cpID;
      this.ename = this.datacpdetail[0].name;
      this.dstart = this.datacpdetail[0].Date_start;
      this.duration = this.datacpdetail[0].duration;
      this.tstart = this.datacpdetail[0].Time_start;
      this.tstop = this.datacpdetail[0].Time_stop;
      this.area = this.datacpdetail[0].distance;
      this.cpname = this.datacpdetail[0].Episode_name;
      // this.datapass.event_name = this.database[0].name;
      // this.datapass.event_id = this.database[0].eventID;
      this.datapass.cpuuid = this.cpid;
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
    this.http.get('http://acb.msuproject.net/webservice/listChecker/' + this.datapass.event_id,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datachecker = jsondata;
      this.checkeruid = this.datachecker[0].userID;
      this.c_ID = this.datachecker[0].c_ID;
      console.log(JSON.stringify(jsondata));
      // this.roter.navigateByUrl('event-list');
    }).catch(reason => {
      // alert('no...');
      console.log(reason);
    });

  }

  add() {

     this.roter.navigateByUrl('add-checker');
  }

    delete() {
      this.http.get('http://acb.msuproject.net/webservice/cpDel/' + this.datapass.cpuid,
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

  del(parameters: { c_ID: number }) {
    this.c_ID = parameters.c_ID;
    this.http.get('http://acb.msuproject.net/webservice/ckDel/' + this.c_ID,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      // this.datachecker = jsondata;
      // console.log(JSON.stringify(jsondata));
      // this.roter.navigateByUrl('event-list');
      alert('delete checker');
    }).catch(reason => {
      // alert('no...');
      console.log(reason);
    });
  }
}
