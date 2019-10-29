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
  datamembercheck;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.cpdetail();
    this.checker();
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
      // this.checkeruid = this.datachecker[0].userID;
      // this.c_ID = this.datachecker[0].c_ID;
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
  // check() {
  //   this.http.get('http://acb.msuproject.net/webservice/checkuser/' + this.datapass.event_id + '=' + this.datapass.cpuid,
  //       { }, {}).then(value => {
  //     let jsondata = JSON.parse(value.data);
  //     this.datamembercheck = jsondata;
  //     console.log(JSON.stringify(jsondata));
  //   }).catch(reason => {
  //     console.log(reason);
  //   });
  // }

  showmember() {
    this.roter.navigateByUrl('member-check');
  }
}
