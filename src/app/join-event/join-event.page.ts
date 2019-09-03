import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
@Component({
  selector: 'app-join-event',
  templateUrl: './join-event.page.html',
  styleUrls: ['./join-event.page.scss'],
})
export class JoinEventPage implements OnInit {
  ecode;
  a1 = '';
  a2 = '';
  status = '' ;
  datacode;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) { }
  ngOnInit() {
  }
  join() {
    this.http.post('http://acb.msuproject.net/webservice/newJoin',
        { userID : this.datapass.uid,
          eventID : this.ecode,
          A1 : this.a1,
          A2 : this.a2,
          status : this.status}, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datacode = jsondata;
      alert('success');
      this.roter.navigateByUrl('home');
    }).catch(reason => {
      alert('no');
    });
  }
}
