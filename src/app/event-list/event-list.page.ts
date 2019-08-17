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
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.data = this.datapass.data;
    console.log(this.data);
  }

  ngOnInit() {
  }

  ok() {
    alert(this.data);
    this.roter.navigateByUrl('home');
  }

  cp() {
    this.roter.navigateByUrl('detail-event-list');
  }
}
