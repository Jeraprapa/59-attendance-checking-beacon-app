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
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.data = this.datapass.dataevent;
    console.log(this.data);
  }

  ngOnInit() {
  }

  ok() {
    alert(this.data);
    this.roter.navigateByUrl('home');
  }

  cp(parameters: { eventIDs: number }) {
    this.eventIDs = parameters.eventIDs;
    // alert(this.eventIDs);
    this.datapass.event_id = this.eventIDs;
    this.roter.navigateByUrl('detail-event-list');
  }
}
