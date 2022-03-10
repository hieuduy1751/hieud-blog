import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data = [];
  listGroup = document.getElementsByClassName('listGroup');
  selectedList: any;
  selectedItem: any;

  constructor(private route: Router) { 
  }

  ngOnInit(): void {
    this.selectList('1');
  }

  activeElement(index: number) {
    for (let x = 0; x < this.listGroup.length; x++) {
      if (x == index) {
        this.listGroup[index].classList.remove('bg-secondary');
        this.listGroup[index].classList.add('bg-primary');
      } else {
        this.listGroup[x].classList.remove('bg-primary');
        this.listGroup[x].classList.add('bg-secondary');
      }
    }
  }

  selectList(id: string) {
    this.selectedList = this.data.find((item:any) => {
      return item.groupId == id;
    })
  }

  selectItem(id: string) {
    this.selectedItem = id;
  }

  changeState(id: string) {
    this.selectedItem = this.selectedList.items.find((item: { itemId: string; }) => {
      return item.itemId == id;
    })
    this.selectedItem.done = !this.selectedItem.done;
  }
}
