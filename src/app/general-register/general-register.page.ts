import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HTTP} from '@ionic-native/http/ngx';
import {DatapassService} from '../datapass.service';

@Component({
    selector: 'app-general-register',
    templateUrl: './general-register.page.html',
    styleUrls: ['./general-register.page.scss'],
})
export class GeneralRegisterPage implements OnInit {
    password;
    msuid;
    msuusername;
    datamsu;
    datamsudetail;
    as;
    name;
    sname;
    constructor(private roter: Router,  private  http: HTTP, private datapass: DatapassService) { }

    ngOnInit() {
    }

    Ok() {
        this.http.post('http://webservices.csmsu.net/rest/api/Authentication',
            {username: this.msuusername, password: this.password}, {'APIKey': '1234'}).then(value => {
            let jsondata = JSON.parse(value.data);
            this.datamsu = jsondata;
            this.as = this.datamsu.activeStatus;
            this.msuid = this.datamsu.sysUsername;
            this.datapass.msuid = this.msuid;
            this.datapass.pass_msuid = this.password;
            console.log(this.as);
            this.checkstatus();
        }).catch(reason => {
            alert('no');
        });
        this.http.get('http://webservices.csmsu.net/rest/api/MSUStudent/' + this.msuusername,
            { }, {'APIKey': '1234'}).then(value1 => {
            let jsondata1 = JSON.parse(value1.data);
            this.datamsudetail = jsondata1;
            this.name = this.datamsudetail.name;
            this.sname = this.name.split(' ');
            this.datapass.fname = this.sname[1];
            this.datapass.lname = this.sname[2];
            console.log(this.name);
            console.log(this.datamsudetail);
        }).catch(reason => {
            console.log(reason);
        });
    }

    checkstatus() {
        if (this.as === true) {
            this.roter.navigateByUrl('msu-register');
        }
    }
}
