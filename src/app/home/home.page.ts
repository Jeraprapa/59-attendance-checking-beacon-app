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

    constructor(private roter: Router, private datapass: DatapassService) { }
    ngOnInit() {
        this.myimg = this.datapass.img;
    }
    profile() {
         this.roter.navigateByUrl('showprofile');
    }
    JoinEvent() {

    }

    NewEvent() {
        this.roter.navigateByUrl('new-event');
    }

    MyEvent() {
        this.roter.navigateByUrl('myevent');
    }

    Report() {

    }

    logout() {
        this.roter.navigateByUrl('login');
    }

    welcome() {
        this.roter.navigateByUrl('welcome');
    }


}
