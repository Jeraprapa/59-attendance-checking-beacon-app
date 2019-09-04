import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import { IBeacon } from '@ionic-native/ibeacon/ngx';
import {Platform} from '@ionic/angular';
import {BarcodeScannerOptions, BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-join-check',
  templateUrl: './join-check.page.html',
  styleUrls: ['./join-check.page.scss'],
})
export class JoinCheckPage implements OnInit {
    cpidcheck;
    jid;
    i = 0;
    datasign;
    uid;
    x = 0;
    scannedData;
  constructor(private roter: Router, private datapass: DatapassService,
              private  http: HTTP, private ibeacon: IBeacon, private platform: Platform, private barcodeScanner: BarcodeScanner) {
    this.cpidcheck = this.datapass.cpcheck;
    this.jid = this.datapass.join_id;
      this.http.get('http://acb.msuproject.net/webservice/listSign/' + this.datapass.cpcheck,
          { }, {}).then(value => {
          let jsondata = JSON.parse(value.data);
          this.datasign = jsondata;
          for (let n = 0; n < this.datasign.length ; n++) {
              if (this.datasign[n].userID === this.datapass.uid) {
                  this.x = 1;
              }
          }
      }).catch(reason => {
          console.log(reason);
      });
  }
  ngOnInit() {
  }
  start() {
      this.platform.ready().then(value => {
      this.ibeacon.requestAlwaysAuthorization();
      let delegate = this.ibeacon.Delegate();
      delegate.didRangeBeaconsInRegion()
          .subscribe(

              data => {

                  if (data.beacons.length > 0 ) {
                      console.log(JSON.stringify(data));
                      this.i++;
                      if (this.i === 1) {
                          if (this.x === 1) {
                              alert('checked');
                              this.roter.navigateByUrl('join-list-event');
                          } else {
                              this.check();
                              alert('check');
                              this.roter.navigateByUrl('join-lisevent');
                          }
                      } else {
                          this.ibeacon.stopRangingBeaconsInRegion(beaconRegion);
                      }
                  }
              },
              error => console.error()
          );
      delegate.didStartMonitoringForRegion()
          .subscribe(
              data => console.log('didStartMonitoringForRegion: ', data),
              error => console.error()
          );
      delegate.didEnterRegion()
          .subscribe(
              data => {
                console.log('didEnterRegion: ', JSON.stringify(data));

              }
          );

      let beaconRegion = this.ibeacon.BeaconRegion('deskBeacon',
          this.cpidcheck , 0 , 0 , false);

      this.ibeacon.startRangingBeaconsInRegion(beaconRegion).then(value1 => {
        alert('Search....');
      }).catch(reason => {
        console.log(reason);
      });
    }).catch(reason => {
      console.log(reason);

    });
  }

  stop() {
    this.roter.navigateByUrl('home');
  }
    qrscan() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.scannedData = barcodeData.text;
            if (this.cpidcheck === this.scannedData) {
                if (this.x === 1) {
                    alert('checked');
                    this.roter.navigateByUrl('join-list-event');
                } else {
                    this.check();
                    alert('check');
                    this.roter.navigateByUrl('join-lisevent');
                }
            }
        }).catch(err => {
                console.log('Error', err);
            });
    }
    check() {
        this.http.post('http://acb.msuproject.net/webservice/newSign',
            {joinID: this.jid, cpID: this.cpidcheck}, {}).then(value => {
            let jsondata = JSON.parse(value.data);
            console.log(JSON.stringify(jsondata));
        }).catch(reason => {
            alert('no');
        });
    }
}
