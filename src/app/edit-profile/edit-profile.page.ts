import { Component, OnInit } from '@angular/core';
import {DatapassService} from '../datapass.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
img;
  constructor( private datapass: DatapassService) { }

  ngOnInit() {
    this.img = this.datapass.img;
  }

  change() {

  }
}
