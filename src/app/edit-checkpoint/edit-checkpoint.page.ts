import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-checkpoint',
  templateUrl: './edit-checkpoint.page.html',
  styleUrls: ['./edit-checkpoint.page.scss'],
})
export class EditCheckpointPage implements OnInit {
    Name;
  Date;
  Area;

  constructor() { }

  ngOnInit() {
  }

}
