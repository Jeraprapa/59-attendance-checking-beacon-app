import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

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
         this.datapass.data = jsondata;
         // this.datapass.event_name = this.database[0].name;
         // this.datapass.event_id = this.database[0].eventID;
        // console.log(JSON.stringify(jsondata));
          alert(JSON.stringify(jsondata));
        this.roter.navigateByUrl('event-list');
      }).catch(reason => {
        alert('no');
      });
    }
}
