import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import { IBeacon } from '@ionic-native/ibeacon/ngx';
import {Platform} from '@ionic/angular';
import {BarcodeScannerOptions, BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {json} from '@angular-devkit/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

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
    scannedData1;
    scannedData2;
    ratio;
    lat;
    long;
    R;
    dLon;
    dLat;
    a;
    c;
    d;
    qrdata;
    // this.datapass.distancecp
  constructor(private roter: Router, private datapass: DatapassService,
              private  http: HTTP, private ibeacon: IBeacon, private platform: Platform,
              private barcodeScanner: BarcodeScanner, private geolocation: Geolocation) {
    this.cpidcheck = this.datapass.cpcheck;
    this.jid = this.datapass.join_id;
    console.log(this.datapass.distancecp);
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
      this.lat = this.datapass.attendlat;
      this.long = this.datapass.attendlong;
      this.geo();
      this.ibeacon.isBluetoothEnabled().then((isEnable) => {
          if (!isEnable) {
              this.ibeacon.enableBluetooth();
          }
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
                      // console.log(JSON.stringify(data));
                      this.datapass.beaconrssi = data.beacons[0].rssi;
                      this.datapass.beacontx = data.beacons[0].tx;
                      console.log(data.beacons[0].proximity + ' ' + data.beacons[0].rssi + ' ' + data.beacons[0].tx);
                      this.i++;
                      if (this.i === 1) {
                          if (this.x === 1) {
                              // this.caldistance();
                              alert('checked');
                              this.roter.navigateByUrl('join-list-event');
                          } else {
                              // this.check();
                              this.caldistance();
                              // alert('check');
                              this.roter.navigateByUrl('join-list-event');
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
          this.cpidcheck , 0 , 0 , true);

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
            this.qrdata = barcodeData.text.split(':');
            this.scannedData = this.qrdata[0];
            this.scannedData1 = this.qrdata[1]; // lat
            this.scannedData2 = this.qrdata[2]; // long
            if (this.cpidcheck === this.scannedData) {
                if (this.x === 1) {
                    // this.geo();
                    // this.distance();
                    alert('checked');
                    this.roter.navigateByUrl('join-list-event');
                } else {
                    // this.check();
                    this.geo();
                    this.distance();
                    alert('check');
                    this.roter.navigateByUrl('join-list-event');
                }
            }
            console.log(barcodeData.text);
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

    caldistance() {

        if (this.datapass.beaconrssi === 0) {
            // if we cannot determine accuracy, return -1.
            console.log('-1');
        }
        this.ratio = this.datapass.beaconrssi * 1 / this.datapass.beacontx;
        if (this.ratio < 1.0) {
            console.log(Math.pow(this.ratio, 10));
            console.log(Math.round(Math.pow(this.ratio, 10)));
            this.datapass.beacondistance = Math.round(Math.pow(this.ratio, 10));
        } else {
            console.log((0.89976) * Math.pow(this.ratio, 7.7095) + 0.111);
            console.log(Math.round((0.89976) * Math.pow(this.ratio, 7.7095) + 0.111));
            this.datapass.beacondistance = Math.round((0.89976) * Math.pow(this.ratio, 7.7095) + 0.111);
        }
        if (this.datapass.beacondistance <= this.datapass.distancecp) {
            this.check();
            alert('check');
        }
    }

    geo() {
        this.geolocation.getCurrentPosition().then((resp) => {
            // 1 time
            console.log('resp latitude:' + resp.coords.latitude);
            console.log('resp longitude:' + resp.coords.longitude);
            this.datapass.attendlat = resp.coords.latitude;
            this.datapass.attendlong = resp.coords.longitude;
        }).catch((error) => {
            console.log('Error getting location', error);
        });
        // all time
        // let watch = this.geolocation.watchPosition();
        // watch.subscribe((data) => {
        //     // data can be a set of coordinates, or an error (if an error occurred).
        //     // all time
        //     console.log('data longitude:' + data.coords.longitude);
        //     console.log('data latitude:' + data.coords.latitude);
        // });
    }
    distance() {
        this.R = 6371; // km (change this constant to get miles)
        this.dLat = (this.datapass.attendlat - this.scannedData1) * Math.PI / 180;
        this.dLon = (this.datapass.attendlong - this.scannedData2) * Math.PI / 180;
        this.a = Math.sin(this.dLat / 2) * Math.sin(this.dLat / 2) +
            Math.cos(this.scannedData1 * Math.PI / 180 ) * Math.cos(this.datapass.attendlat * Math.PI / 180 ) *
            Math.sin(this.dLon / 2) * Math.sin(this.dLon / 2);
        this.c = 2 * Math.atan2(Math.sqrt(this.a), Math.sqrt(1 - this.a));
        this.d = this.R * this.c; // km
        console.log(this.d * 1000);
        console.log(this.d);
        if (this.d <= this.datapass.distancecp) {
            this.check();
            console.log('check');
        }
    }
}
