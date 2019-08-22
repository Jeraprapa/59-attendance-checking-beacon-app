import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-checkpoint-report',
  templateUrl: './checkpoint-report.page.html',
  styleUrls: ['./checkpoint-report.page.scss'],
})
export class CheckpointReportPage implements OnInit {
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
  datasign;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.cpreport();
  }

  ngOnInit() {
  }
 cpreport() {
  // http://acb.msuproject.net/webservice/listSign/123ee897-e82b-1543-a237-ef66554412d3
   this.http.get('http://acb.msuproject.net/webservice/checkpoint/' + this.datapass.cpuidreport,
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
     console.log(JSON.stringify(jsondata));
     // alert(JSON.stringify(jsondata));
     // alert(JSON.stringify(this.database[0].name));
     // console.log(this.database[0].eventInof[1].name);
     // this.roter.navigateByUrl('event-list');
   }).catch(reason => {
     // alert('no...');
     console.log(reason);
   });

   this.http.get('http://acb.msuproject.net/webservice/listSign/' + this.datapass.cpuidreport,
       { }, {}).then(value => {
     let jsondata = JSON.parse(value.data);
     // this.datapass.dataevent = jsondata;
     this.datasign = jsondata;
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

  send() {

  }
}
