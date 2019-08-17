import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-join-list',
  templateUrl: './join-list.page.html',
  styleUrls: ['./join-list.page.scss'],
})
export class JoinListPage implements OnInit {
  data;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.data = this.datapass.datajoin;
    console.log(this.data);
  }

  ngOnInit() {
  }

  ok() {
    alert(this.data);
    this.roter.navigateByUrl('home');
  }

  jl() {

  }
}
