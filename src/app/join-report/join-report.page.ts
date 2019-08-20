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
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.datas = this.datapass.datajoinreport;
    console.log(this.datas);
  }

  ngOnInit() {
  }
  jl(parameters: { eid: number, joinIDs: number}) {
    this.joinIDs = parameters.joinIDs;
    this.eid = parameters.eid;
    // this.datapass.eid = this.eid;
    // this.datapass.join_id = this.joinIDs;
    this.roter.navigateByUrl('join-detail-report');
  }
}
