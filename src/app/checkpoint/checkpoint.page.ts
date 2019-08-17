import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-checkpoint',
  templateUrl: './checkpoint.page.html',
  styleUrls: ['./checkpoint.page.scss'],
})
export class CheckpointPage implements OnInit {

  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) { }

  ngOnInit() {
  }

  addcp() {
    this.roter.navigateByUrl('new-checkpoint');
  }
}
