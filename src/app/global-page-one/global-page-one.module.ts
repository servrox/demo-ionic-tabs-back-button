import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GlobalPageOnePage } from './global-page-one.page';

const routes: Routes = [
  {
    path: '',
    component: GlobalPageOnePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GlobalPageOnePage]
})
export class GlobalPageOnePageModule {}
