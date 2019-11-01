import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';
import {HTTP} from '@ionic-native/http/ngx';
import * as moment from 'moment';
import uuidv1 from 'uuid/v1';

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
    timenow = moment().format('HH:mm');
    datenow = moment().format('YYYY-MM-DD');
    timestart1;
    datestartc;
    duration;
    eid;
    cpid;
    datacp;
    uid;
    isDisbled = false;
  constructor(private roter: Router, private datapass: DatapassService, private  http: HTTP) {
      this.eid = this.datapass.event_id;
      this.cpid = this.datapass.cpid;
      this.uid = uuidv1();
      // this.timestop = this.timestart + this.duration ;
      this.datapass.tsp = this.timestop;
      // this.timestop  =  moment(this.timestart, 'HH:mm').add(this.duration , 'minutes').format('HH:mm:ss');
      this.timestart  =  moment(this.timestart, 'HH:mm').format('HH:mm:ss');
      this.date  =  moment(this.date, 'YYYY-MM-DD').format('YYYY-MM-DD');
  }
  ngOnInit() {
  }

    newcp() {
        // this.timestop = new Date(this.timestart.getTime() + (1000 * this.duration * 60 ));
        // this.timestop  =  moment(this.timestart, 'HH:mm').add(this.duration , 'minutes').format('HH:mm:ss');
        // this.timestart  =  moment(this.timestart, 'HH:mm').format('HH:mm:ss');
        // this.date  =  moment(this.date, 'YYYY-MM-DD').format('YYYY-MM-DD');
        console.log(this.duration);
        const test = { checkpoinID : this.uid,
            eventID : this.eid,
            Date_start : this.date,
            Time_start : this.timestart,
            Time_stop : this.timestop,
            distance : this.area,
            duration : this.duration ,
            Episode_name : this.name};
            console.log(JSON.stringify(test));
        this.http.post('http://acb.msuproject.net/webservice/newCheckPoint',
            { checkpoinID : this.uid,
                    eventID : this.eid,
                    Date_start : this.date,
                    Time_start : this.timestart,
                    Time_stop : this.timestop,
                    distance : this.area,
                    duration : this.duration ,
                    Episode_name : this.name}, {}).then(value => {
             let jsondata = JSON.parse(value.data);
             this.datacp = jsondata;
              // alert(JSON.stringify(this.datacp));
            // this.timestop = this.timestart + this.duration ;
            // this.timestop = this.timestart;
             this.roter.navigateByUrl('checkpoint');
        }).catch(reason => {
            alert('no');
        });
    }
    onchange($event) {
        this.datestartc = $event;
        if ($event === this.datenow) {
            this.timestart1 = this.timenow;
        } else {
            this.timestart1 = '00:00' ;
        }
        // this.mindate1 = $event;
    }

    onchange1($event) {
        this.timestop  =  moment(this.timestart, 'HH:mm').add($event , 'minutes').format('HH:mm:ss');
        this.datapass.tsp = this.timestop;
    }
}
