import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-detail-event-list',
  templateUrl: './detail-event-list.page.html',
  styleUrls: ['./detail-event-list.page.scss'],
})
export class DetailEventListPage implements OnInit {
    datae;
    name;
    detail;
    dstart;
    dstop;
    tstart;
    tstop;
    status;
    codeid;

  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.edetail();
  }

  ngOnInit() {
  }

  cp() {
    this.roter.navigateByUrl('checkpoint');
  }
  edetail() {
    this.http.get('http://acb.msuproject.net/webservice/event/' + this.datapass.event_id,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      // this.datapass.dataevent = jsondata;
      this.datae = jsondata;
      this.detail = this.datae[0].detail;
      this.dstart = this.datae[0].Date_start;
      this.dstop = this.datae[0].Date_stop;
      this.tstart = this.datae[0].Time_start;
      this.tstop = this.datae[0].Time_stop;
      this.status = this.datae[0].status;
      this.name = this.datae[0].name;
      this.codeid =  this.datapass.event_id;
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
}
