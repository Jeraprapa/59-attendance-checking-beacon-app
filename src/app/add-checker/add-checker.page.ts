import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-add-checker',
  templateUrl: './add-checker.page.html',
  styleUrls: ['./add-checker.page.scss'],
})
export class AddCheckerPage implements OnInit {
  data;
  public isToggled: boolean;
  value;
  datamemberlist;
  memberIDs;
  i = 0;
  j = 0;
  datachecker;
  cpid;
  joinIDs;
  public show: boolean;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    // this.myValue();
    this.checker();
    this.isToggled = false;
    // this.show = true;
  }

  ngOnInit() {
  }
  public notify() {
    console.log(this.isToggled);
  }

  checker () {
    this.http.get('http://acb.msuproject.net/webservice/joinmember/' + this.datapass.event_id,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datamemberlist = jsondata;
      // this.joinid = this.datapass[0].joinID;
      console.log(JSON.stringify(jsondata));
      // this.roter.navigateByUrl('event-list');
    }).catch(reason => {
      // alert('no...');
      console.log(reason);
    });

  }

  checkerid(parameters: { memberIDs: number , joinIDs: number}) {
    this.memberIDs = parameters.memberIDs;
    this.joinIDs = parameters.joinIDs;
    // alert(this.eventIDs);
    // this.datapass.event_id = this.memberIDs;
    this.i++;
    if (this.i === 1) {
      this.j++;
      if (this.j === 1) {
        console.log(this.joinIDs);
        console.log(this.datapass.cpuuid);
        this.http.post('http://acb.msuproject.net/webservice/newChecker',
            { JoinID : this.joinIDs,
              cpID : this.datapass.cpuuid}, {}).then(value => {
          let jsondata = JSON.parse(value.data);
          this.datachecker = jsondata;
          // alert(JSON.stringify(this.datacp));
          // this.timestop = this.timestart + this.duration ;
          // this.timestop = this.timestart;
          // this.roter.navigateByUrl('checkpoint');
          // alert(JSON.stringify(this.datachecker));
          console.log(JSON.stringify(jsondata));
        }).catch(reason => {
          alert('no');
        });
        // this.show = false;
      }
      this.i--;
    }
  }
  check(parameters: { memberIDs: number , joinIDs: number}) {
    this.memberIDs = parameters.memberIDs;
    this.joinIDs = parameters.joinIDs;
    // alert(this.eventIDs);
    // this.datapass.event_id = this.memberIDs;

  }
}
