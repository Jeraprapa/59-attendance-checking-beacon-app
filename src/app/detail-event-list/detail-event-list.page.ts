import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import {IBeacon} from '@ionic-native/ibeacon/ngx';
import {
    BarcodeScannerOptions,
    BarcodeScanner
} from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-detail-event-list',
  templateUrl: './detail-event-list.page.html',
  styleUrls: ['./detail-event-list.page.scss'],
})
export class DetailEventListPage implements OnInit {
    datae;
    name;
    detail;
    dstart;
    dstop;
    tstart;
    tstop;
    status;
    codeid;
    elementType: 'url' | 'canvas' | 'img' = 'url';

  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP, private barcodeScanner: BarcodeScanner) {
    this.edetail();
  }

  ngOnInit() {
  }

  cp() {
    this.roter.navigateByUrl('checkpoint');
  }
  edetail() {
    this.http.get('http://acb.msuproject.net/webservice/event/' + this.datapass.event_id,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      // this.datapass.dataevent = jsondata;
      this.datae = jsondata;
      this.detail = this.datae[0].detail;
      this.dstart = this.datae[0].Date_start;
      this.datapass.edate = this.datae[0].Date_stop;
      this.tstart = this.datae[0].Time_start;
      this.datapass.etime = this.datae[0].Time_stop;
      this.status = this.datae[0].status;
      this.name = this.datae[0].name;
      this.codeid =  this.datapass.event_id;
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      console.log(reason);
    });
  }

    showmember() {
        this.roter.navigateByUrl('member-list');
    }

    approval() {
        this.roter.navigateByUrl('approve');
    }

    delete() {
        this.http.get('http://acb.msuproject.net/webservice/eventDel/' + this.datapass.event_id,
            { }, {}).then(value => {
            let jsondata = JSON.parse(value.data);
            alert('delete event');
        }).catch(reason => {
            console.log(reason);
        });
    }

    edit() {
        this.roter.navigateByUrl('edit-event');
    }

    doRefresh(event) {
        console.log('Begin async operation');

        setTimeout(() => {
            console.log('Async operation has ended');
            this.edetail();
            event.target.complete();
        }, 2000);
    }
}
