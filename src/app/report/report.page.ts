import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) { }
  database;
  datab;
  ngOnInit() {
  }

  myeventlist() {
    this.http.get('http://acb.msuproject.net/webservice/listEvent/' + this.datapass.uid,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datapass.dataeventreport = jsondata;
      this.database = jsondata;
      console.log(JSON.stringify(jsondata));
      this.roter.navigateByUrl('event-report');
    }).catch(reason => {
      console.log(reason);
    });
  }

  myjoinlist() {
    this.http.get('http://acb.msuproject.net/webservice/listJoin/' + this.datapass.uid,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datapass.datajoinreport = jsondata;
       console.log(JSON.stringify(jsondata));
      this.roter.navigateByUrl('join-report');
    }).catch(reason => {
      console.log(reason);
    });
  }
}
