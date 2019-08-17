import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-checkpoint',
  templateUrl: './checkpoint.page.html',
  styleUrls: ['./checkpoint.page.scss'],
})
export class CheckpointPage implements OnInit {

  datacplist;
  cpids;
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
      // this.datapass.event_name = this.database[0].name;
      // this.datapass.cpuid = this.datacplist[0].cpID;
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
  addcp() {

    this.roter.navigateByUrl('new-checkpoint');
  }

  cpdetail(parameters: { cpids: number }) {
    this.cpids = parameters.cpids;
    this.datapass.cpuid = this.cpids;
    this.roter.navigateByUrl('checkpoint-detail');
  }
}
