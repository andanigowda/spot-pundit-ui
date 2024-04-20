import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shemaroo-store',
  templateUrl: './shemaroo-store.component.html',
  styleUrls: ['./shemaroo-store.component.scss']
})
export class ShemarooStoreComponent implements OnInit {

  showMore: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onChangeShowToggle = (index) => {
    this.showMore[index] = !this.showMore[index];
  } 

}
