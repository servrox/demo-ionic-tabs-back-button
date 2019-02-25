# Demo: Ionic 4 project with a tab based layout <br /> which shows workarounds for the ion-back-button <br /> when navigating between tabs and 'global' pages. <br />

The demo shows two ways how to navigate from a tabbed page to a 'global' page and back,<br />
**without losing tab-states**.<br />
First solution is a workaround that overcomes the problem.<br />
The secound one deals directly with the problem.<br />

## Problem explained

When navigating from a page inside a tab to a 'global' page, the ion-back button will no longer work properly.<br />
More specifically, the back button no longer navigates to the previously opened page, instead it uses the redirect of the tabs-routing.<br />
<br />
This happens because the ion-back-button [uses](https://github.com/ionic-team/ionic/blob/4646f53ec7ab39a2e89f0c59a427b6b61ea7788e/angular/src/directives/navigation/ion-back-button.ts#L25) only the main-IonRouterOutlet, instead of also checking tabs-IonRouterOutlet.<br />
Which means that the StackController inside the main-IonRouterOutlet only knows the route of the tabs module (e.g. 'tabs').<br />
^*No guarantee on this*^<br />
<br />
Problem is also described in the official [Bug Report](https://github.com/ionic-team/ionic/issues/15216).<br />
<br />

## 1. Passing previous page

See *global-page-one*.

tbd

## 2. Fixing/Adding ion-back-button directive

See *global-page-two*.

tbd

## Getting Started
``` 
git clone https://github.com/servrox/demo-ionic-tabs-back-button.git
cd demo-ionic-tabs-back-button
yarn
ionic serve
```

## Built With

* [Ionic CLI](https://ionicframework.com/docs/cli/) - version 4.10.3
* [Ionic Framework](https://material.angular.io/) - @ionic/angular 4.0.1 

## Authors

* **Marcel Mayer** - 
[servrox.solutions](http://servrox.solutions)