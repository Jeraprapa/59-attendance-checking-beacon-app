import { Component, OnInit } from '@angular/core';
import { IBeacon } from '@ionic-native/ibeacon/ngx';

@Component({
  selector: 'app-attend',
  templateUrl: './attend.page.html',
  styleUrls: ['./attend.page.scss'],
})
export class AttendPage implements OnInit {

  constructor(private ibeacon: IBeacon) { }

  ngOnInit() {
  }

    startbeacon() {
      // Request permission to use location on iOS
      this.ibeacon.requestAlwaysAuthorization();
// create a new delegate and register it with the native layer
      let delegate = this.ibeacon.Delegate();
// Subscribe to some of the delegate's event handlers
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
      let beaconRegion = this.ibeacon.BeaconRegion('deskBeacon',
          '12345678-0000-1234-0000-000000000000' , 0 , 0 , false);
      this.ibeacon.startAdvertising(beaconRegion)
          .then(
              () => console.log('Native layer received the request to monitoring'),
              error => console.error('Native layer failed to begin monitoring: ', error)
          );
    }

  stopbeacon() {
    // Request permission to use location on iOS
    this.ibeacon.requestAlwaysAuthorization();
// create a new delegate and register it with the native layer
    let delegate1 = this.ibeacon.Delegate();

// Subscribe to some of the delegate's event handlers
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
        '12345678-0000-1234-0000-000000000000' , 0 , 0 , false);

    this.ibeacon.stopAdvertising(beaconRegion1)
        .then(
            () => console.log('Native layer received the request to monitoring'),
            error => console.error('Native layer failed to begin monitoring: ', error)
        );
  }
}
