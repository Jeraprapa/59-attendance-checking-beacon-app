import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import {json} from '@angular-devkit/core';

@Component({
  selector: 'app-myevent',
  templateUrl: './myevent.page.html',
  styleUrls: ['./myevent.page.scss'],
})
export class MyeventPage implements OnInit {

  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) { }
  database;
  ngOnInit() {
  }

    elist() {
      this.http.get('http://acb.msuproject.net/webservice/listEvent/' + this.datapass.uid,
          { }, {}).then(value => {
         let jsondata = JSON.parse(value.data);
         this.datapass.dataevent = jsondata;
         this.database = jsondata;
          // this.datapass.event_name = this.database[0].name;
          // this.datapass.event_id = this.database[0].eventID;
          console.log(JSON.stringify(jsondata));
         // alert(JSON.stringify(jsondata));
         // alert(JSON.stringify(this.database[0].name));
        // console.log(this.database[0].eventInof[1].name);
        this.roter.navigateByUrl('event-list');
      }).catch(reason => {
        // alert('no...');
        console.log(reason);
      });
    }

  joine() {
    this.roter.navigateByUrl('welcome');
  }
}
