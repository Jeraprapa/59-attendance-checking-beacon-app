import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GeneralRegisterPage } from './general-register.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralRegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GeneralRegisterPage]
})
export class GeneralRegisterPageModule {}
