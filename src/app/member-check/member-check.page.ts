import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-member-check',
  templateUrl: './member-check.page.html',
  styleUrls: ['./member-check.page.scss'],
})
export class MemberCheckPage implements OnInit {
  datamembercheck;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) { }

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
}
