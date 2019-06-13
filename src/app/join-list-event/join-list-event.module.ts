import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JoinListEventPage } from './join-list-event.page';

const routes: Routes = [
  {
    path: '',
    component: JoinListEventPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JoinListEventPage]
})
export class JoinListEventPageModule {}
