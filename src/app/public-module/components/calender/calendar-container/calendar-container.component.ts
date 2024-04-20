import { Component, OnInit } from '@angular/core';

enum View {
  CALENDAR_ONE,
  CALENDAR_TWO,
}

@Component({
  selector: 'app-calendar-container',
  templateUrl: './calendar-container.component.html',
  styleUrls: ['./calendar-container.component.scss'],
})

export class CalendarContainerComponent implements OnInit {

  // enum variables
  htmlView = View;
  activeView: View = this.htmlView.CALENDAR_ONE;

  constructor() {}

  ngOnInit(): void {}

  onChangeYear(flag) {
    switch (flag) {
      case '2022':
        this.activeView = this.htmlView.CALENDAR_ONE;
        break;

      case '2023':
        this.activeView = this.htmlView.CALENDAR_TWO;
        break;
    }
  }
}
