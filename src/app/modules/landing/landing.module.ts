import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';
import { LandingHeaderComponent } from './components/landing-header/landing-header.component';
import { LandingFooterComponent } from './components/landing-footer/landing-footer.component';


@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    AboutComponent,
    PricingComponent,
    ContactComponent,
    LandingHeaderComponent,
    LandingFooterComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  exports: [
    LandingHeaderComponent,
    LandingFooterComponent
  ]
})
export class LandingModule { }
