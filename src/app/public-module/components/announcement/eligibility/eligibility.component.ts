import { Component, OnInit } from '@angular/core';
import { UrlContant } from 'src/app/constants/router.contant';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.scss']
})
export class EligibilityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get applicationUrl() {
    return '/' + UrlContant.APPLICATION_URL;
  }

}
