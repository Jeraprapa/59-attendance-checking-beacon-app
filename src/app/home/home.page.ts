import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    myimg;

    constructor(private roter: Router, private datapass: DatapassService) {
        this.myimg = this.datapass.img;
    }
    ngOnInit() {

    }
    profile() {
         this.roter.navigateByUrl('showprofile');
    }
    JoinEvent() {
        this.roter.navigateByUrl('join-event');
    }

    NewEvent() {
        this.roter.navigateByUrl('new-event');
    }

    MyEvent() {
        this.roter.navigateByUrl('myevent');
    }

    Report() {
        this.roter.navigateByUrl('report');
    }

    logout() {
        this.roter.navigateByUrl('login');
    }

    welcome() {
        this.roter.navigateByUrl('welcome');
    }


}
