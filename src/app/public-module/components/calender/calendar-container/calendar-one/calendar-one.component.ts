import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-one',
  templateUrl: './calendar-one.component.html',
  styleUrls: ['./calendar-one.component.scss'],
})
export class CalendarOneComponent implements OnInit {
  
  calendarList: any[] = [
    {
      right: [
        {
          date: 'Thursday, January 14, 2022',
          festival: 'Makarsankranti / Pongal',
        },
        {
          date: 'Thursday, January 18, 2022',
          festival: 'Thaipusam',
        },
      ],
      left: [
        {
          date: 'Saturday, February 5, 2022',
          festival: 'Vasant Panchami',
        },
      ],
    },
    {
      right: [
        {
          date: 'Tuesday, March 1, 2022',
          festival: 'Maha Shivaratri',
        },
        {
          date: 'Tuesday, March 17, 2022',
          festival: 'Holika Dahan',
        },
        {
          date: 'Saturday, March 19, 2022',
          festival: 'Holi',
        },
        {
          date: 'Thursday, March 22, 2022',
          festival: 'Hindi New Year',
        },
      ],
      left: [
        {
          date: 'Saturday, April 02, 2022',
          festival: 'Ugadi / Gudi Padwa / Telugu New Year',
        },
        {
          date: 'Saturday, April 10, 2022',
          festival: 'Ram Navami',
        },
        {
          date: 'Thursday, April 14, 2022',
          festival: 'Vaisakhi / Baisakhi / Vishu',
        },
        {
          date: 'Thursday, April 14, 2022',
          festival: 'Tamil New Year',
        },
        {
          date: 'Friday, April 16, 2022',
          festival: 'Hanuman Jayanti',
        },
      ],
    },
    {
      right: [
        {
          date: 'Tuesday, May 3, 2022',
          festival: 'Akshaya Tritiya',
        },
        {
          date: 'Monday, May 30, 2022',
          festival: 'Savitri Puja',
        },
      ],
      left: [
        {
          date: 'Friday, July 01, 2022',
          festival: 'Puri Rath Yatra',
        },
      ],
    },
    {
      right: [
        {
          date: 'Tuesday, August 02, 2022',
          festival: 'Nag Panchami',
        },
        {
          date: 'Thursday, August 11, 2022',
          festival: 'Raksha Bandhan',
        },
        {
          date: 'Friday, August 12, 2022',
          festival: 'Varalakshmi Vrat',
        },
        {
          date: 'Friday, August 19, 2022',
          festival: 'Krishna Janmashtami',
        },
        {
          date: 'Wednesday, August 31, 2022',
          festival: 'Ganesh Chaturthi',
        },
      ],
      left: [
        {
          date: 'Thursday, September 08, 2022',
          festival: 'Onam',
        },
        {
          date: 'Saturday, September 17, 2022',
          festival: 'Vishwakarma Puja',
        },
        {
          date: 'Sunday, September 25, 2022',
          festival: 'Mahalaya Amavasya',
        },
        {
          date: 'Monday, September 26, 2022',
          festival: 'Navaratri begins',
        },
      ],
    },
    {
      right: [
        {
          date: 'Tuesday, October 04, 2022',
          festival: 'Navaratri ends / Maha Navami',
        },
        {
          date: 'Wednesday, October 05, 2022',
          festival: 'Dusshera',
        },
        {
          date: 'Sunday, October 09, 2022',
          festival: 'Sharad Purnima',
        },
        {
          date: 'Thursday, October 13, 2022',
          festival: 'Karwa Chauth',
        },
        {
          date: 'Saturday, October 22, 2022',
          festival: 'Dhan Teras',
        },
        {
          date: 'Monday, October 24, 2022',
          festival: 'Diwali',
        },
        {
          date: 'Wednesday, October 26, 2022',
          festival: 'Bhai Dooj',
        },
        {
          date: 'Sunday, October 30, 2022',
          festival: 'Chhath Puja',
        },
      ],
      left: [
        {
          date: 'Tuesday, November 08, 2022',
          festival: 'Kartik Poornima',
        },
      ],
    },
    {
      right: [
        {
          date: 'Saturday, December 03, 2022',
          festival: 'Geeta Jayanti',
        },
        {
          date: 'Tuesday, December 16, 2022',
          festival: 'Dhanu Sankranti',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
