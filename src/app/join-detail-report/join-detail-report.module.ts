import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JoinDetailReportPage } from './join-detail-report.page';

const routes: Routes = [
  {
    path: '',
    component: JoinDetailReportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JoinDetailReportPage]
})
export class JoinDetailReportPageModule {}
