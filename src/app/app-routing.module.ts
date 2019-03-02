import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'global-page-one', loadChildren: './global-page-one/global-page-one.module#GlobalPageOnePageModule' },
  { path: 'global-page-two', loadChildren: './global-page-two/global-page-two.module#GlobalPageTwoPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
