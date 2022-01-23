import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { 
    this.router.events.subscribe(val => {
      this.routerChanges();
    })
  }
  
  routerItems = this.router.url.split('/').slice(1);
  routerPath = '';
  ngOnInit(): void {
  }

  routerChanges(numOfRouter?: number): string {
    this.routerItems = this.router.url.split('/').slice(1);
    return this.routerPath = this.routerItems.slice(0, numOfRouter ? numOfRouter : -1).join('/')
  }
}
