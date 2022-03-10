import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LandingHeaderConfig } from '../../../../configs/landing-header.config';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit, OnDestroy {
  headerLinks = LandingHeaderConfig.headerLinks;
  currentRoute!: string;
  sb!: Subscription;

  constructor(
    private router: Router
  ) { 
    this.sb = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(this.currentRoute);
      }
    });
  }

  ngOnDestroy(): void {
    this.sb.unsubscribe();
  }

  ngOnInit(): void {
  }

}
