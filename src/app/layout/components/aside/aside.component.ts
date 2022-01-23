import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  listItems = [
    {
      name: 'Dashboard',
      router: '/dashboard',
      icon: 'fa-tachometer-alt'
    },
    {
      name: 'Pomodoro',
      router: '/pomodoro',
      icon: 'fa-clock'
    },
    {
      name: 'To-do List',
      router: '/todo',
      icon: 'fa-check-square'
    },
    {
      name: 'Notes',
      router: '/notes',
      icon: 'fa-sticky-note'
    },
    {
      name: 'Calendar',
      router: '/calendar',
      icon: 'fa-calendar-alt'
    },
  ]
  listButtons = document.getElementsByTagName('button');
  collapsed = true;
  buttonClass = ' fa-arrow-alt-circle-right';

  constructor() { }

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
      if(x == i) {
        this.listButtons[i].classList.toggle('bg-primary');
        this.listButtons[i].classList.toggle('bg-dark');
      } else {
        this.listButtons[x].classList.remove('bg-primary');
        this.listButtons[x].classList.add('bg-dark');
      }
  }
}
