import { Component, OnInit } from '@angular/core';
import { IBeacon } from '@ionic-native/ibeacon/ngx';
import {
    BarcodeScannerOptions,
    BarcodeScanner
} from '@ionic-native/barcode-scanner/ngx';
import {DatapassService} from '../datapass.service';
import {Router} from '@angular/router';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-attend',
  templateUrl: './attend.page.html',
  styleUrls: ['./attend.page.scss'],
})
export class AttendPage implements OnInit {
    beaconRegion;
    uid;
    qrData;
    elementType: 'url' | 'canvas' | 'img' = 'url';
    attendlat;
    attendlong;
  constructor(private ibeacon: IBeacon, private barcodeScanner: BarcodeScanner,
              private datapass: DatapassService, private roter: Router, private geolocation: Geolocation) {
      this.uid = this.datapass.cpuuid;
      this.qrData = this.uid;
      // this.i = this.u[1];
      this.geo();
  }
  ngOnInit() {
  }
    startbeacon() {
      this.ibeacon.requestAlwaysAuthorization();
      let delegate = this.ibeacon.Delegate();
      delegate.didRangeBeaconsInRegion()
          .subscribe(
              data => console.log('didRangeBeaconsInRegion: ', data),
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
                console.log('didEnterRegion: ', data);
              }
          );
      this.beaconRegion = this.ibeacon.BeaconRegion('deskBeacon',
          this.uid , 0 , 0 , false);
      this.datapass.cpid = this.beaconRegion.uuid;
      this.ibeacon.startAdvertising(this.beaconRegion)
          .then(
              () => alert(this.beaconRegion.uuid),
              error => console.error('Native layer failed to begin monitoring: ', error)
          );

    }

  stopbeacon() {
    this.ibeacon.requestAlwaysAuthorization();
    let delegate1 = this.ibeacon.Delegate();
    delegate1.didRangeBeaconsInRegion()
        .subscribe(
            data => console.log('didRangeBeaconsInRegion: ', data),
            error => console.error()
        );
    delegate1.didStartMonitoringForRegion()
        .subscribe(
            data => console.log('didStartMonitoringForRegion: ', data),
            error => console.error()
        );
    delegate1.didEnterRegion()
        .subscribe(
            data => {
              console.log('didEnterRegion: ', data);
            }
        );
    let beaconRegion1 = this.ibeacon.BeaconRegion('deskBeacon',
        this.uid , 0 , 0 , false);

    this.ibeacon.stopAdvertising(beaconRegion1)
        .then(
            () => console.log('Native layer received the request to monitoring'),
            error => console.error('Native layer failed to begin monitoring: ', error)
        );
  }
    home() {
        this.roter.navigateByUrl('home');
    }
    geo() {
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log('resp latitude:' + resp.coords.latitude);
            console.log('resp longitude:' + resp.coords.longitude);
            this.attendlat = resp.coords.latitude;
            this.attendlong = resp.coords.longitude;
        }).catch((error) => {
            console.log('Error getting location', error);
        });

        // let watch = this.geolocation.watchPosition();
        // watch.subscribe((data) => {
        //     // data can be a set of coordinates, or an error (if an error occurred).
        //     console.log('data longitude:' + data.coords.longitude);
        //     console.log('data latitude:' + data.coords.latitude);
        // });
    }
}
