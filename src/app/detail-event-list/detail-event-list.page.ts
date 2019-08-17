import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-detail-event-list',
  templateUrl: './detail-event-list.page.html',
  styleUrls: ['./detail-event-list.page.scss'],
})
export class DetailEventListPage implements OnInit {
    Detail;

  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) { }

  ngOnInit() {
  }

  cp() {
    this.roter.navigateByUrl('checkpoint');
  }
}
