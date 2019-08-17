import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-checkpoint-detail',
  templateUrl: './checkpoint-detail.page.html',
  styleUrls: ['./checkpoint-detail.page.scss'],
})
export class CheckpointDetailPage implements OnInit {
  uid;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) { }

  ngOnInit() {
  }

  st() {
    // this.uid = this.datapass.cpuid;
    this.roter.navigateByUrl('attend');
  }
}
