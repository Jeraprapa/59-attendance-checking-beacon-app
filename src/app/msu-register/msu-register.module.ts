import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MsuRegisterPage } from './msu-register.page';

const routes: Routes = [
  {
    path: '',
    component: MsuRegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MsuRegisterPage]
})
export class MsuRegisterPageModule {}
