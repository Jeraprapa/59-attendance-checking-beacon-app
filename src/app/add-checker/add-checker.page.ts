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


  datamemberlist;
  memberIDs;
  i = 0;
  j = 0;
  datachecker;
  x = 0;
  joinIDs;
  checkeruid;
  datacheck;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
    this.checker();
    this.http.get('http://acb.msuproject.net/webservice/listChecker/' + this.datapass.event_id,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datacheck = jsondata;
      // this.checkeruid = this.datacheck[0].joinID;
      for (let n = 0; n < this.datacheck.length ; n++) {
        if (this.datacheck[n].userID === this.datapass.uid) {
          this.x = 1;
        }
      }
      console.log(this.checkeruid);
    }).catch(reason => {
      console.log(reason);
    });
  }

  ngOnInit() {
  }
  public notify() {
    // console.log(this.isToggled);
  }

  checker () {
    this.http.get('http://acb.msuproject.net/webservice/joinmember/' + this.datapass.event_id,
        { }, {}).then(value => {
      let jsondata = JSON.parse(value.data);
      this.datamemberlist = jsondata;
      console.log(JSON.stringify(jsondata));
    }).catch(reason => {
      console.log(reason);
    });

  }

  checkerid(parameters: { memberIDs: number , joinIDs: number}) {
    this.memberIDs = parameters.memberIDs;
    this.joinIDs = parameters.joinIDs;
    this.i++;
    if (this.i === 1) {
      this.j++;
      if (this.j === 1) {
        if (this.x === 1 ) {
          alert('have checker');
        } else {
          this.http.post('http://acb.msuproject.net/webservice/newChecker',
              { joinID : this.joinIDs,
                cpID : this.datapass.cpuuid}, {}).then(value => {
            let jsondata = JSON.parse(value.data);
            this.datachecker = jsondata;
            console.log(JSON.stringify(jsondata));
            alert('complete');
          }).catch(reason => {
            alert('no');
          });
        }
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
