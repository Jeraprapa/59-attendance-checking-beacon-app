import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    img;

    constructor(private roter: Router, private datapass: DatapassService) { }
    ngOnInit() {
        this.img = this.datapass.img;

    }
    profile() {
         this.roter.navigateByUrl('showprofile');
    }
    JoinEvent() {

    }

    NewEvent() {

    }

    MyEvent() {

    }

    Report() {

    }

}
