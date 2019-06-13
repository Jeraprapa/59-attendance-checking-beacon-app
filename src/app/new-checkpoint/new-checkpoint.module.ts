import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewCheckpointPage } from './new-checkpoint.page';

const routes: Routes = [
  {
    path: '',
    component: NewCheckpointPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewCheckpointPage]
})
export class NewCheckpointPageModule {}
