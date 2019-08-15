import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';

@Component({
  selector: 'app-code-event',
  templateUrl: './code-event.page.html',
  styleUrls: ['./code-event.page.scss'],
})
export class CodeEventPage implements OnInit {
 eid;
  constructor(private roter: Router, private datapass: DatapassService) { }

  ngOnInit() {
    // this.eid = this.datapass.event_id;
  }

  ok() {
    this.roter.navigateByUrl('welcome');
  }
}
