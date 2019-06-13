import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditCheckpointPage } from './edit-checkpoint.page';

const routes: Routes = [
  {
    path: '',
    component: EditCheckpointPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditCheckpointPage]
})
export class EditCheckpointPageModule {}
