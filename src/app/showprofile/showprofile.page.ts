import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-showprofile',
  templateUrl: './showprofile.page.html',
  styleUrls: ['./showprofile.page.scss'],
})
export class ShowprofilePage implements OnInit {

  constructor(private roter: Router) { }

  ngOnInit() {
  }

    myprofile() {
      this.roter.navigateByUrl('edit-profile');
    }
}
