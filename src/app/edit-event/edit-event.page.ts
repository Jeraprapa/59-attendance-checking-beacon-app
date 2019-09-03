import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import {Camera} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.page.html',
  styleUrls: ['./edit-event.page.scss'],
})
export class EditEventPage implements OnInit {
  name;
  q1;
  q2;
  datae;
  ename;
  detail;
  dstart;
  dstop;
  tstart;
  tstop;
  status;
  codeid;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP, private camera: Camera) {
    this.edetail();
  }

  ngOnInit() {
  }


  edetail() {
    this.http.get('http://acb.msuproject.net/webservice/event/' + this.datapass.event_id,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datae = jsondata;
      this.detail = this.datae[0].detail;
      this.dstart = this.datae[0].Date_start;
      this.dstop = this.datae[0].Date_stop;
      this.tstart = this.datae[0].Time_start;
      this.tstop = this.datae[0].Time_stop;
      this.status = this.datae[0].status;
      this.ename = this.datae[0].name;
      this.codeid =  this.datapass.event_id;
      this.q1 = this.datae[0].Question1;
      this.q2 = this.datae[0].Question2;
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      console.log(reason);
    });
  }
  ok() {
    this.http.post('http://acb.msuproject.net/webservice/editEvent/' + this.datapass.event_id,
        {
                name : this.ename,
                detail : this.detail,
                Date_start : this.dstart,
                Date_stop : this.dstop,
                Time_start : this.tstart,
                Time_stop : this.tstop,
                status : this.status,
                Q1 : this.q1,
                Q2 : this.q2
        }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      console.log(JSON.stringify(jsondata));
      this.roter.navigateByUrl('detail-event-list');
    }).catch(reason => {
      alert('no');
    });
  }
}
