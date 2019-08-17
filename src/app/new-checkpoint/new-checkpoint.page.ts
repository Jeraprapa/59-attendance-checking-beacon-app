import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-new-checkpoint',
  templateUrl: './new-checkpoint.page.html',
  styleUrls: ['./new-checkpoint.page.scss'],
})
export class NewCheckpointPage implements OnInit {
    name;
    date;
    area;
    timestart;
    timestop;
    duration;
    eid;
    cpid;
    datacp;

  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
      this.eid = this.datapass.event_id;
      this.cpid = this.datapass.cpid;
      this.timestop = this.timestart + this.duration ;
  }
  ngOnInit() {
  }

    newcp() {
        this.http.post('http://acb.msuproject.net/webservice/newCheckPoint',
            { checkpoinID : this.cpid,
                    eventID : this.eid,
                    Date_start : this.date,
                    Time_start : this.timestart,
                    Time_stop : this.timestop,
                    distance : this.area,
                    duration : this.duration,
                    Episode_name : this.name}, {}).then(value => {
             let jsondata = JSON.parse(value.data);
             this.datacp = jsondata;
              alert(JSON.stringify(this.datacp));
            this.timestop = this.timestart + this.duration ;
             this.roter.navigateByUrl('checkpoint');
        }).catch(reason => {
            alert('no');
        });
    }
}
