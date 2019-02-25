import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-global-page-one',
  templateUrl: './global-page-one.page.html',
  styleUrls: ['./global-page-one.page.scss'],
})
export class GlobalPageOnePage implements OnInit {

  previousPage: string;
  useRealBackButton: boolean;
  showText: boolean;

  constructor(private route: ActivatedRoute, public navCtrl: NavController, public plt: Platform, private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) { this.useRealBackButton = event.id === 1; }
    });
  }

  ngOnInit() {
    this.showText = this.plt.is('ios');
    this.previousPage = this.route.snapshot.paramMap.get('p') ? atob(this.route.snapshot.paramMap.get('p')) : null;
  }

  back() { this.navCtrl.navigateBack(this.previousPage); }
}
