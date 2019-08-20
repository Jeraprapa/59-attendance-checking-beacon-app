import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-checkpoint-report',
  templateUrl: './checkpoint-report.page.html',
  styleUrls: ['./checkpoint-report.page.scss'],
})
export class CheckpointReportPage implements OnInit {

  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.cpreport();
  }

  ngOnInit() {
  }
 cpreport() {
  // http://acb.msuproject.net/webservice/listSign/123ee897-e82b-1543-a237-ef66554412d3
   this.http.get('http://acb.msuproject.net/webservice/listSign/123ee897-e82b-1543-a237-ef66554412d3',
       { }, {}).then(value => {
     let jsondata = JSON.parse(value.data);
     // this.datapass.dataevent = jsondata;
     // this.datacplist = jsondata;
     // this.datapass.event_name = this.database[0].name;
     // this.datapass.cpuid = this.datacplist[0].cpID;
     // this.datapass.event_id = this.database[0].eventID;
     console.log(JSON.stringify(jsondata));
     // alert(JSON.stringify(jsondata));
     // alert(JSON.stringify(this.database[0].name));
     // console.log(this.database[0].eventInof[1].name);
     // this.roter.navigateByUrl('event-list');
   }).catch(reason => {
     // alert('no...');
     console.log(reason);
   });
 }
}
