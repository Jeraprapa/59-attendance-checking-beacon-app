import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.page.html',
  styleUrls: ['./edit-event.page.scss'],
})
export class EditEventPage implements OnInit {
    name;
  datestart;
  timestart;
  datestop;
  timestop;
  des;
  e;
  q1;
  q2;

  constructor() { }

  ngOnInit() {
  }

  ok() {

  }
}
