import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { GlobalPageTwoPage } from './global-page-two.page';

import { BackButtonTabsModule } from 'ion-back-button-tabs';

const routes: Routes = [
  {
    path: '',
    component: GlobalPageTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    BackButtonTabsModule
  ],
  declarations: [GlobalPageTwoPage]
})
export class GlobalPageTwoPageModule { }
