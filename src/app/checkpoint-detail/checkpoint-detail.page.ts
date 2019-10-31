import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import * as moment from 'moment';

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
  datamembercheck;
  timenow = moment().format('HH:mm:ss');
  datenow = moment().format('YYYY-MM-DD');
  c = 0;
  dt;
  dtn;
  dts;
  dtse;
  datecp;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.cpdetail();
    this.checker();
    this.dt = this.datenow + 'T' + this.timenow;
    this.dtn = Date.parse(this.dt);
    this.dtse = this.dstart + 'T' + this.tstop;
    this.dts = Date.parse(this.dtse);
    console.log(this.dtn);
    console.log(this.dts);
    // if (this.dtn === this.dts || this.dtn < this.dts) {
    //   this.c = 1;
    //   console.log(this.c);
    // } else {
    //   this.c = 0;
    //   console.log(this.c);
    // }
  }

  ngOnInit() {
  }
  st() {
     this.roter.navigateByUrl('attend');
  }
  cpdetail() {
    this.http.get('http://acb.msuproject.net/webservice/checkpoint/' + this.datapass.cpuid,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datacpdetail = jsondata;
      this.cpid = this.datacpdetail[0].cpID;
      this.ename = this.datacpdetail[0].name;
      this.dstart = this.datacpdetail[0].Date_start;
      this.datapass.durationtime = this.datacpdetail[0].duration;
      this.tstart = this.datacpdetail[0].Time_start;
      this.tstop = this.datacpdetail[0].Time_stop;
      this.datapass.distancecp = this.datacpdetail[0].distance;
      this.cpname = this.datacpdetail[0].Episode_name;
      this.datapass.cpuuid = this.cpid;
      console.log(JSON.stringify(jsondata));
      console.log(this.datapass.distancecp);
    }).catch(reason => {
      console.log(reason);
    });
  }
  checker () {
    this.http.get('http://acb.msuproject.net/webservice/listChecker/' + this.datapass.event_id,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datachecker = jsondata;
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
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
        alert('delete checkpoint');
      }).catch(reason => {
        console.log(reason);
      });
  }
  del(parameters: { c_ID: number }) {
    this.c_ID = parameters.c_ID;
    this.http.get('http://acb.msuproject.net/webservice/ckDel/' + this.c_ID,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      alert('delete checker');
    }).catch(reason => {
      console.log(reason);
    });
  }
  edit() {
    this.roter.navigateByUrl('edit-checkpoint');
  }

  showmember() {
    this.roter.navigateByUrl('member-check');
  }
    doRefresh(event) {
        console.log('Begin async operation');

        setTimeout(() => {
            console.log('Async operation has ended');
            this.cpdetail();
            this.checker();
            event.target.complete();
        }, 2000);
    }
}
