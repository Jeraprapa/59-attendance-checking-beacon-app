import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-join-list',
  templateUrl: './join-list.page.html',
  styleUrls: ['./join-list.page.scss'],
})
export class JoinListPage implements OnInit {
  data;
  joinIDs;
  eid;
  datab;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.data = this.datapass.datajoin;
    console.log(this.data);
    this.joine();
  }

  ngOnInit() {
  }

  ok() {
    // alert(this.data);
    this.roter.navigateByUrl('home');
  }

  jl(parameters: { eid: number, joinIDs: number}) {
    this.joinIDs = parameters.joinIDs;
    this.eid = parameters.eid;
    this.datapass.eid = this.eid;
    this.datapass.join_id = this.joinIDs;
    this.roter.navigateByUrl('join-list-event');
  }

  joine() {
    this.http.get('http://acb.msuproject.net/webservice/listJoin/' + this.datapass.uid,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datapass.datajoin = jsondata;
      this.datab = jsondata;
      console.log(this.datapass.uid);
      console.log(JSON.stringify(jsondata));
      // this.roter.navigateByUrl('join-list');
    }).catch(reason => {
      console.log(reason);
    });
  }
}
