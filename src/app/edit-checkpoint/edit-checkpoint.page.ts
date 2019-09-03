import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import {Camera} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-edit-checkpoint',
  templateUrl: './edit-checkpoint.page.html',
  styleUrls: ['./edit-checkpoint.page.scss'],
})
export class EditCheckpointPage implements OnInit {
  datacpdetail;
  cpid;
  ename;
  dstart;
  area;
  tstart;
  tstop;
  duration;
  cpname;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP, private camera: Camera) {
    this.cpdetail();
  }

  ngOnInit() {
  }

  cpdetail() {
    this.http.get('http://acb.msuproject.net/webservice/checkpoint/' + this.datapass.cpuid,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datacpdetail = jsondata;
      this.cpid = this.datacpdetail[0].cpID;
      this.ename = this.datacpdetail[0].name;
      this.dstart = this.datacpdetail[0].Date_start;
      this.duration = this.datacpdetail[0].duration;
      this.tstart = this.datacpdetail[0].Time_start;
      this.tstop = this.datacpdetail[0].Time_stop;
      this.area = this.datacpdetail[0].distance;
      this.cpname = this.datacpdetail[0].Episode_name;
      this.datapass.cpuuid = this.cpid;
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      console.log(reason);
    });
  }
  ok() {
    this.http.post('http://acb.msuproject.net/webservice/editCheckpoint/' + this.datapass.cpuid,
        {
          Date_start : this.dstart,
          Time_start : this.tstart,
          Time_stop : this.tstop,
          distance : this.area,
          duration : this.duration,
          Episode_name : this.cpname
        }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      console.log(JSON.stringify(jsondata));
      this.roter.navigateByUrl('checkpoint-detail');
    }).catch(reason => {
      alert('no');
    });
  }
}
