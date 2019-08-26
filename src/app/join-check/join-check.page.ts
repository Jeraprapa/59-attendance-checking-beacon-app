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
    datasign;
    uid;
  constructor(private roter: Router, private datapass: DatapassService,
              private  http: HTTP, private ibeacon: IBeacon, private platform: Platform) {
    this.cpidcheck = this.datapass.cpcheck;
    this.jid = this.datapass.join_id;
  }
  ngOnInit() {
  }
  start() {
      this.http.get('http://acb.msuproject.net/webservice/listSign/' + this.datapass.cpcheck,
          { }, {}).then(value => {
          let jsondata = JSON.parse(value.data);
          this.datasign = jsondata;
          this.uid = this.datasign[0].uid;
          console.log(JSON.stringify(jsondata));
      }).catch(reason => {
          console.log(reason);
      });

      this.platform.ready().then(value => {
      this.ibeacon.requestAlwaysAuthorization();
      let delegate = this.ibeacon.Delegate();
      delegate.didRangeBeaconsInRegion()
          .subscribe(

              data => {

                if (data.beacons.length > 0 ) {
                  console.log(JSON.stringify(data));
                  if (this.uid === this.datapass.uid) {
                      this.i++;
                      if (this.i === 1) {
                          this.check();
                          alert('check');
                      } else {
                          this.ibeacon.stopRangingBeaconsInRegion(beaconRegion);
                      }
                  } else {
                      alert('checked');
                      this.roter.navigateByUrl('join-list-event');
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
    this.roter.navigateByUrl('home');
  }
  check() {
    this.http.post('http://acb.msuproject.net/webservice/newSign',
        {joinID: this.jid, cpID: this.cpidcheck}, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      // this.datapass.data = jsondata;
      // this.datapass.event_name = this.database[0].name;
      // this.datapass.event_id = this.database[0].eventID;
       console.log(JSON.stringify(jsondata));
      // alert(JSON.stringify(jsondata));
    }).catch(reason => {
      alert('no');
    });
  }
}
