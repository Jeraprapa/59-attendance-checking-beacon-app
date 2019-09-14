import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
    selector: 'app-general-register',
    templateUrl: './general-register.page.html',
    styleUrls: ['./general-register.page.scss'],
})
export class GeneralRegisterPage implements OnInit {
    password;
    musid;
    msuusername;
    datamsu;
    datamsudetail;
    as;
    constructor(private roter: Router,  private  http: HTTP) { }

    ngOnInit() {
    }

    Ok() {
        this.http.post('http://webservices.csmsu.net/rest/api/Authentication',
            {username: this.msuusername, password: this.password}, {'APIKey': '1234'}).then(value => {
            let jsondata = JSON.parse(value.data);
            this.datamsu = jsondata;
            this.as = this.datamsu.activeStatus;
            console.log(this.as);
            this.check();
        }).catch(reason => {
            // alert('no');
            console.log(reason);
        });
        this.http.get('http://webservices.csmsu.net/rest/api/MSUStudent/' + this.musid,
            { }, {'APIKey': '1234'}).then(value1 => {
            let jsondata1 = JSON.parse(value1.data);
            this.datamsudetail = jsondata1;
            console.log(this.datamsudetail);
        }).catch(reason => {
            console.log(reason);
        });
        // this.roter.navigateByUrl('msu-register');
    }

    check() {
        if (this.as === true) {
            this.roter.navigateByUrl('msu-register');
        }
    }
}
