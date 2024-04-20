import { Component, OnInit } from '@angular/core';
import { UrlContant } from 'src/app/constants/router.contant';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get eligibilityUrl() {
    return '/' + UrlContant.ELIGIBILITY_URL;
  }

}
