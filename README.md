# Demo: Ionic tabs + global pages with `ion-back-button`
Ionic 4 project with a tab based layout and workarounds for the `ion-back-button`.<br />
The demo shows two ways how to navigate from a tabbed page to a 'global' page and back,<br />
**without losing tab-states**.<br />

![Live Demo](http://g.recordit.co/8Lre03MyU6.gif)

## Getting Started
``` 
git clone https://github.com/servrox/demo-ionic-tabs-back-button.git
cd demo-ionic-tabs-back-button
yarn
ionic serve
```
<br />

## Solutions shown in demo

[First](#1-passing-previous-page-s-global-page-one) solution is a workaround that overcomes the problem.<br />
The [second](#2-using-ion-back-button-tabs-component-s-global-page-two) one is a fix which deals directly with the problem<br /> by using [`ion-back-button-tabs`](https://www.npmjs.com/package/ion-back-button-tabs) a custom ionic 4 component.<br />
<br />


### 1. Passing previous page *(s. global-page-one)*

This solution overcomes the problem by using an `ion-button` instead of the `ion-back button`.<br />
To make it work following steps are necessary:
1. Get the route you want to navigate back later.
```
this.currentRoute = btoa(this.router.url);
```
2. Pass that value to the page called. (url params used here)
```
<ion-button 
    [routerLink]="['/global-page-one', {p: currentRoute}]"
    routerDirection="forward">
    Global Page One
</ion-button>
```
3. On the page called check if a route was given
```
this.previousPage = this.route.snapshot.paramMap.get('p') ? atob(this.route.snapshot.paramMap.get('p')) : null;
```
4. Use given route when user clicks back
```
back() { this.navCtrl.navigateBack(this.previousPage); }
```
<br />
To make the `ion-button` look exactly like the `ion-back-button`, you can check which platform is being used.

```
this.showText = this.plt.is('ios');
```
If the page with the back-button is the first page called, the real `ion-back-button` can be used. This works because then the defaultHref is taken.
```
this.router.events.subscribe((event: RouterEvent) => {
    if (event instanceof NavigationEnd) { 
        this.useRealBackButton = event.id === 1; 
    }
});
```
Final solution looks like this in template:
```
<ion-buttons slot="start">
    <ion-back-button *ngIf="useRealBackButton" 
        [defaultHref]="previousPage ? previousPage : '/tabs/tab1'">
    </ion-back-button>
    <ion-button *ngIf="!useRealBackButton" (click)="back()">
        <ion-icon name="arrow-back"></ion-icon>
        {{ showText ? 'Back' : null }}
    </ion-button>
</ion-buttons>
```

<br />
<br />

### 2. Using [`ion-back-button-tabs`](https://www.npmjs.com/package/ion-back-button-tabs) component *(s. global-page-two)*

1. Install from [npm](https://www.npmjs.com/package/ion-back-button-tabs)
```
npm i ion-back-button-tabs --save
```
2. Import `BackButtonTabsModule` to the page module (*global-page-two.module.ts*)
```
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
```
3. Get attributes for `ion-back-button-tabs`<br />
* `tabsPrefix` is the url path set for the TabsPage component *(e.g. 'tabs')*
```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
...
```
* `tabsPageSelector` is the selector of the TabsPage component *(e.g. 'app-tabs')*
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {}

```
4. Use `ion-back-button-tabs` in template
```
<ion-back-button-tabs 
  defaultHref="/tabs/tab1" 
  tabsPrefix="tabs" 
  tabsPageSelector="app-tabs">
</ion-back-button-tabs>
```
<br />

## Problem explained

When navigating from a page inside a tab to a 'global' page,
the `ion-back button` will no longer work properly.<br />
More specifically, the back button no longer navigates to the previously opened page, instead it uses the redirect of the tabs-routing.<br />
<br />
This happens because the `ion-back-button` [uses](https://github.com/ionic-team/ionic/blob/4646f53ec7ab39a2e89f0c59a427b6b61ea7788e/angular/src/directives/navigation/ion-back-button.ts#L25) only the main-IonRouterOutlet, instead of also checking tabs-IonRouterOutlet.<br />
Which means that the StackController inside the main-IonRouterOutlet only knows the route of the tabs module (e.g. 'tabs').<br />
^*No guarantee on this*^<br />
<br />
Problem is also described in the official [Bug Report](https://github.com/ionic-team/ionic/issues/15216).<br />
<br />

## Built With

* [Ionic CLI](https://ionicframework.com/docs/cli/) - version 4.10.3
* [Ionic Framework](https://material.angular.io/) - @ionic/angular 4.0.1 

## Authors

* **Marcel Mayer** - 
[servrox.solutions](http://servrox.solutions)