import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import {forEach} from '@angular-devkit/schematics';

@Component({
  selector: 'app-member-check',
  templateUrl: './member-check.page.html',
  styleUrls: ['./member-check.page.scss'],
})
export class MemberCheckPage implements OnInit {
  datamembercheck;
  join_id;
  util;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.check();
    console.log(this.datapass.event_id + '=' + this.datapass.cpuid);
  }

  ngOnInit() {
  }
  check() {
    this.http.get('http://acb.msuproject.net/webservice/checkuser/' + this.datapass.event_id + '=' + this.datapass.cpuid,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datamembercheck = jsondata;
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      console.log(reason);
    });
  }
  cm(parameters: { join_id: number }) {
    this.join_id = parameters.join_id;
    this.http.post('http://acb.msuproject.net/webservice/newSign',
        {joinID: this.join_id, cpID: this.datapass.cpuid}, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      alert('เช็คชื่อแล้ว');
      this.roter.navigateByUrl('checkpoint-detail');
    }).catch(reason => {
      alert('no');
    });
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.check();
      event.target.complete();
    }, 2000);
  }
}
