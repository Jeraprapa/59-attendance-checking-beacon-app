import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  data;
  h;
  eventIDs;
  database;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.data = this.datapass.dataevent;
    console.log(this.data);
    this.elist();
  }

  ngOnInit() {
  }

  ok() {
    // alert(this.data);
    this.roter.navigateByUrl('home');
  }

  cp(parameters: { eventIDs: number }) {
    this.eventIDs = parameters.eventIDs;
    // alert(this.eventIDs);
    this.datapass.event_id = this.eventIDs;
    this.roter.navigateByUrl('detail-event-list');
  }
  elist() {
    this.http.get('http://acb.msuproject.net/webservice/listEvent/' + this.datapass.uid,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datapass.dataevent = jsondata;
      this.database = jsondata;
      console.log(JSON.stringify(jsondata));
      // this.roter.navigateByUrl('event-list');
    }).catch(reason => {
      console.log(reason);
    });
  }


}
