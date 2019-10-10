import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.page.html',
  styleUrls: ['./member-list.page.scss'],
})
export class MemberListPage implements OnInit {
  data;
  public isToggled: boolean;
  value;
  datamemberlist;
  memberIDs;
  i = 0;
  j = 0;
  datachecker;
  joinid;
  cpid;
  public show: boolean;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    // this.myValue();
    // this.checker();
    this.member();
    this.isToggled = false;
    // this.show = true;
  }

  ngOnInit() {
  }
  public notify() {
     console.log(this.isToggled);
  }

  checker () {
    this.http.get('http://acb.msuproject.net/webservice/joinmember/' + this.datapass.event_id,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datamemberlist = jsondata;
      console.log(JSON.stringify(jsondata));
      // this.roter.navigateByUrl('event-list');
    }).catch(reason => {
      // alert('no...');
      console.log(reason);
    });
  }
  member () {
    this.http.get('http://acb.msuproject.net/webservice/join/' + this.datapass.event_id + '=approved',
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datamemberlist = jsondata;
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      console.log(reason);
    });
  }
}
