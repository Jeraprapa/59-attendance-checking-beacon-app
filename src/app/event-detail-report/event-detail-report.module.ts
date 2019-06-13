import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventDetailReportPage } from './event-detail-report.page';

const routes: Routes = [
  {
    path: '',
    component: EventDetailReportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EventDetailReportPage]
})
export class EventDetailReportPageModule {}
