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
  constructor(private roter: Router , private datapass: DatapassService) { }

  ngOnInit() {
    this.myname = this.datapass.name;
  }

    myprofile() {
      this.roter.navigateByUrl('edit-profile');
    }
}
