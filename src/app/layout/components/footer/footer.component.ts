import { Component, OnInit } from '@angular/core';
import { LandingHeaderConfig } from 'src/app/configs/landing-header.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  headerLinks = LandingHeaderConfig.headerLinks;

  constructor() { }

  ngOnInit(): void {
  }

}
