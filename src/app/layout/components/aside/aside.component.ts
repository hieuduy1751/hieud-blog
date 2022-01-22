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
      router: '/dashboard'
    },
    {
      name: 'Pomodoro',
      router: '/pomodoro'
    },
    {
      name: 'To-do List',
      router: '/todo'
    },
    {
      name: 'Notes',
      router: '/notes'
    },
    {
      name: 'Calendar',
      router: '/calendar'
    },
  ]
  listButtons = document.getElementsByTagName('button');

  constructor() { }

  ngOnInit(): void {
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
