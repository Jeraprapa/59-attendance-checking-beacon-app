import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import { IBeacon } from '@ionic-native/ibeacon/ngx';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-join-check',
  templateUrl: './join-check.page.html',
  styleUrls: ['./join-check.page.scss'],
})
export class JoinCheckPage implements OnInit {
 cpidcheck;
 jid;
 i = 0;
  constructor(private roter: Router, private datapass: DatapassService,
              private  http: HTTP, private ibeacon: IBeacon, private platform: Platform) {
    this.cpidcheck = this.datapass.cpcheck;
    this.jid = this.datapass.join_id;
  }

  ngOnInit() {
  }

  start() {
    this.platform.ready().then(value => {
      // Request permission to use location on iOS
      this.ibeacon.requestAlwaysAuthorization();
// create a new delegate and register it with the native layer
      let delegate = this.ibeacon.Delegate();

// Subscribe to some of the delegate's event handlers
      delegate.didRangeBeaconsInRegion()
          .subscribe(

              data => {

                if (data.beacons.length > 0 ) {
                  alert(JSON.stringify(data));
                  this.i++;
                  if (this.i === 1) {
                    this.check();
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

      this.ibeacon.startRangingBeaconsInRegion(beaconRegion).then(value => {
        alert('ok....');
      }).catch(reason => {

        alert(reason);
      });
    }).catch(reason => {
      alert(reason);

    });
  }

  stop() {
    this.roter.navigateByUrl('login');
  }
  check() {
    this.http.post('http://acb.msuproject.net/webservice/newSign',
        {joinID: this.jid, cpID: this.cpidcheck}, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      // this.datapass.data = jsondata;
      // this.datapass.event_name = this.database[0].name;
      // this.datapass.event_id = this.database[0].eventID;
       console.log(JSON.stringify(jsondata));
      alert(JSON.stringify(jsondata));
    }).catch(reason => {
      alert('no');
    });
  }
}
