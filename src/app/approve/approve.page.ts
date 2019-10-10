import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.page.html',
  styleUrls: ['./approve.page.scss'],
})
export class ApprovePage implements OnInit {
  public isToggled: boolean;
  value;
  data;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    // this.myValue();
    this.isToggled = false;
    this.http.get('http://acb.msuproject.net/webservice/join/' + this.datapass.event_id + '=unapproved',
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.data = jsondata;
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      console.log(reason);
    });
  }

  ngOnInit() {
  }
  public notify() {
    console.log(this.isToggled);
  }


  ok(parameters: { userIDs: number }) {
    // update unapproved to approved
    this.http.post('http://acb.msuproject.net/webservice/join/' + this.datapass.event_id + '/' + parameters.userIDs,
        {
          'status' : 'approved'
        }, {}).then(value => {
      // let jsondata = JSON.parse(value.data);
      // this.data = jsondata;
      // console.log(JSON.stringify(jsondata));
      alert('complete');
    }).catch(reason => {
      console.log(reason);
    });
  }
}
