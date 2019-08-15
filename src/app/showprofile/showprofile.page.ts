import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';

@Component({
  selector: 'app-showprofile',
  templateUrl: './showprofile.page.html',
  styleUrls: ['./showprofile.page.scss'],
})
export class ShowprofilePage implements OnInit {
  myname;
  mytel;
  myimg;
  mysur;
  mymsuid;
  myid;
  constructor(private roter: Router , private datapass: DatapassService) { }

  ngOnInit() {
    this.myname = this.datapass.name;
    this.mysur = this.datapass.surname;
    this.mytel = this.datapass.tel;
    this.myimg = this.datapass.img;
    this.mymsuid = this.datapass.msu;
    this.myid = this.datapass.uid;
  }

    myprofile() {
      this.roter.navigateByUrl('edit-profile');
    }

  ok() {
    this.roter.navigateByUrl('home');
  }
}
