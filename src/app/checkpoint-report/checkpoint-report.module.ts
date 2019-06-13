import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CheckpointReportPage } from './checkpoint-report.page';

const routes: Routes = [
  {
    path: '',
    component: CheckpointReportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CheckpointReportPage]
})
export class CheckpointReportPageModule {}
