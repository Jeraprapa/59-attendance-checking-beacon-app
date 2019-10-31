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
  jid;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    // this.myValue();
    this.join();
    this.isToggled = false;
  }

  ngOnInit() {
  }
  public notify() {
    console.log(this.isToggled);
  }
  join () {
    this.http.get('http://acb.msuproject.net/webservice/join/' + this.datapass.event_id + '=unapproved',
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.data = jsondata;
      this.jid = this.data[0].joinID;
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      console.log(reason);
    });
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

  del(parameters: { JoinIDs: number }) {
    // console.log(parameters.JoinIDs);
    this.http.get('http://acb.msuproject.net/webservice/joinDel/' + parameters.JoinIDs,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      // this.data = jsondata;
      // console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      console.log(reason);
    });
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.join();
      event.target.complete();
    }, 2000);
  }
}
