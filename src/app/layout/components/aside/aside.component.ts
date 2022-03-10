import { Component, OnInit } from '@angular/core'
import { AsideMenuConfig } from 'src/app/configs/aside-menu.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  listButtons = document.getElementsByTagName('button');
  collapsed = true;
  buttonClass = ' fa-arrow-alt-circle-right';
  listItems = AsideMenuConfig.listItems;

  constructor(private router: Router) { 
   }
  path = this.router.url;

  ngOnInit(): void {
  }

  collapseState(num?: number) {
    this.collapsed = !this.collapsed;
    if(this.collapsed && num)
      this.collapsed = !this.collapsed;
    if(this.collapsed)
      this.buttonClass = ' fa-arrow-alt-circle-right';
    else
      this.buttonClass = ' fa-arrow-alt-circle-left'
  }

  activeElement(i: number) {
    for(let x = 0; x < this.listItems.length; x++)
      if(x == i + 1) {
        this.listButtons[i + 1].classList.toggle('bg-primary');
        this.listButtons[i + 1].classList.toggle('bg-dark');
      } else {
        this.listButtons[x].classList.remove('bg-primary');
        this.listButtons[x].classList.add('bg-dark');
      }
  }
}
