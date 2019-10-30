import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-join-report',
  templateUrl: './join-report.page.html',
  styleUrls: ['./join-report.page.scss'],
})
export class JoinReportPage implements OnInit {
  datas;
  joinIDs;
  eid;
  eventname = '';
  datestart = '';
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.datas = this.datapass.datajoinreport;
    console.log(this.datas);
  }

  ngOnInit() {
  }
  jl(parameters: { eid: number, joinIDs: number}) {
    this.joinIDs = parameters.joinIDs;
    this.eid = parameters.eid;
    this.roter.navigateByUrl('join-detail-report');
  }

  ok(param: { datestart; eventname}) {
    this.http.post('http://acb.msuproject.net/webservice/joinsearch/' + this.datapass.uid,
        {
          name : this.eventname,
          Date: this.datestart
        }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datas = jsondata;
      // alert('complete');
      // this.roter.navigateByUrl('home');
    }).catch(reason => {
      alert('no');
    });
  }
  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      this.datas = this.datapass.datajoinreport;
      this.eventname = '';
      this.datestart = '';
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }
}
