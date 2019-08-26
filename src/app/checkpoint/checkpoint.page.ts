import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import * as moment from 'moment';

@Component({
  selector: 'app-checkpoint',
  templateUrl: './checkpoint.page.html',
  styleUrls: ['./checkpoint.page.scss'],
})
export class CheckpointPage implements OnInit {

  datacplist;
  cpids;
  dates;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.cplist();
  }

  ngOnInit() {
  }

  cplist() {
    this.http.get('http://acb.msuproject.net/webservice/listCheckpoint/' + this.datapass.event_id,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datapass.dataevent = jsondata;
      this.datacplist = jsondata;
      this.dates = moment(this.datacplist[0].Date_start, 'YYYY-MM-DD').format('DD-MM-YYYY');
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      console.log(reason);
    });
  }
  addcp() {

    this.roter.navigateByUrl('new-checkpoint');
  }

  cpdetail(parameters: { cpids: number }) {
    this.cpids = parameters.cpids;
    this.datapass.cpuid = this.cpids;
    this.roter.navigateByUrl('checkpoint-detail');
  }
}
