import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UrlContant } from 'src/app/constants/router.contant';
import { PanditService } from '../../services/pandit-service/pandit.service';

@Component({
  selector: 'app-pandits',
  templateUrl: './pandit.component.html',
  styleUrls: ['./pandit.component.scss']
})
export class PanditsComponent implements OnInit {

  panditList: any[] = [];
  isLoading = false;

  constructor(private fb: FormBuilder, private _router: Router, private panditService: PanditService) { }

  ngOnInit(): void {
    this.getPanditList();
  }

  panditDetails(obj) {
    const title = obj.name.replace(/\s/g , "-");
    const url = `${obj.id}\/${title}`;
    this._router.navigate(['/' + UrlContant.PANDIT_PROFILE_URL, url])
  }

  getPanditList() {
    this.panditService.panditFeaturedListApi().subscribe(res => {
      this.panditList = res;
      this.isLoading = false;
    })
  }

  onGetArray(ratingCount) {
    ratingCount = Math.round(ratingCount * 10) / 10;
    return Array.from(Array(ratingCount).keys());
  }
 }
