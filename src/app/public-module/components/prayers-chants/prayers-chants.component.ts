import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { UrlContant } from '../../../constants/router.contant';
import { PublicService } from '../../services/public-service.service';

@Component({
  selector: 'app-prayers-chants',
  templateUrl: './prayers-chants.component.html',
  styleUrls: ['./prayers-chants.component.scss'],
})
export class PrayersChantsComponent implements OnInit {
  prayerList: any[] = [];
  selectedPrayer;

  constructor(private router: Router,private _publicService: PublicService) {}

  ngOnInit(): void {
    this.getPrayersList();
  }

  getPrayersList(){
    this._publicService.prayerListApi().subscribe((res) => {
        this.prayerList = res;
        let i = 1;
        this.prayerList.forEach(element => {
          element.counter = i;
          i+=1;
        })
        this.selectedPrayer = this.prayerList[0];
      });
  }


  onOpenPrayersDetails(item) {
    this.selectedPrayer = item;
    //  this.router.navigate(['/' + UrlContant.PRAYERS_DETAILS_URL, item.id]);
  }
}
