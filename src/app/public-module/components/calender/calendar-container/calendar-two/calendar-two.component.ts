import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-two',
  templateUrl: './calendar-two.component.html',
  styleUrls: ['./calendar-two.component.scss'],
})
export class CalendarTwoComponent implements OnInit {
  calendarList: any[] = [
    {
      right: [
        {
          date: 'Saturday, January 14, 2023',
          festival: 'Makarsankranti / Pongal',
        },
        {
          date: 'Thursday, January 26, 2023',
          festival: 'Vasant Panchami',
        },
      ],
      left: [
        {
          date: 'Sunday, February 5, 2023',
          festival: 'Thaipusam',
        },
        {
          date: 'Saturday, February 18, 2023',
          festival: 'Maha Shivaratri',
        },
      ],
    },
    {
      right: [
        {
          date: 'Tuesday, March 7, 2023',
          festival: 'Holika Dahan',
        },
        {
          date: 'Wednesday, March 8, 2023',
          festival: 'Holi',
        },
        {
          date: 'Wednesday, March 22, 2023',
          festival: 'Hindi New Year',
        },
        {
          date: 'Wednesday, March 22, 2023',
          festival: 'Ugadi',
        },
        {
          date: 'Thursday, March 30, 2023',
          festival: 'Ram Navami',
        },
      ],
      left: [
        {
          date: 'Friday, April 14, 2023',
          festival: 'Baisakhi',
        },
        {
          date: 'Friday, April 14, 2023',
          festival: 'Tamil New Year',
        },
        {
          date: 'Thursday, April 16, 2023',
          festival: 'Hanuman jayanti',
        },
        {
          date: 'Saturday, April 22, 2023',
          festival: 'Akshaya Tritiya',
        },
      ],
    },
    {
      right: [
        {
          date: 'Saturday, June 3, 2023',
          festival: 'Savitri Puja',
        },
        {
          date: 'Tuesday, June 20, 2023',
          festival: 'Puri Rath Yatra',
        },
      ],
      left: [
        {
          date: 'Monday, July 03, 2023',
          festival: 'Guru Purnima',
        },
      ],
    },
    {
      right: [
        {
          date: 'Monday, August 21, 2023',
          festival: 'Nag Panchami',
        },
        {
          date: 'Friday, August 25, 2023',
          festival: 'Varalakshmi Vrat',
        },
        {
          date: 'Tuesday, August 29, 2023',
          festival: 'Onam',
        },
        {
          date: 'Wednesday, August 30, 2023',
          festival: 'Raksha Bandhan',
        }
      ],
      left: [
        {
          date: 'Thursday, September 09, 2023',
          festival: 'Krishna Janmashtami',
        },
        {
          date: 'Monday, September 19, 2023',
          festival: 'Ganesh Chaturthi',
        },
        {
          date: 'Sunday, September 17, 2023',
          festival: 'Vishwakarma Puja',
        },
      ],
    },
    {
      right: [
        {
          date: 'Saturday, October 14, 2023',
          festival: 'Mahalaya Amavasya',
        },
        {
          date: 'Sunday, October 15, 2023',
          festival: 'Navaratri begins',
        },
        {
          date: 'Monday, October 23, 2023',
          festival: 'Navaratri ends / Maha Navami',
        },
        {
          date: 'Tuesday, October 24, 2023',
          festival: 'Dusshera',
        },
        {
          date: 'Saturday, October 28, 2023',
          festival: 'Sharad Purnima',
        },
      ],
      left: [
        {
          date: 'Wednesday, November 01, 2023',
          festival: 'Karwa Chauth',
        },
        {
          date: 'Friday, November 10, 2023',
          festival: 'Dhanteras',
        },
        {
          date: 'Friday, November 12, 2023',
          festival: 'Diwali',
        },
        {
          date: 'Tuesday, November 14, 2023',
          festival: 'Bhaidooj',
        },
        {
          date: 'Saturday, November 18, 2023',
          festival: 'Chhath Puja',
        },
        {
          date: 'Friday, November 24, 2023',
          festival: 'Kartik Poornima',
        },
      ],
    },
    {
      right: [
        {
          date: 'Saturday, December 16, 2023',
          festival: 'Dhanu Sankranti',
        },
        {
          date: 'Friday, December 22, 2023',
          festival: 'Geeta Jayanti',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
