import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UrlContant } from 'src/app/constants/router.contant';
import { TempleService } from '../../services/temple-service/temple.service';

@Component({
  selector: 'app-crematorium-list',
  templateUrl: './crematorium-list.component.html',
  styleUrls: ['./crematorium-list.component.scss']
})

export class CrematoriumListComponent implements OnInit {

  crematoriumList = [];

  constructor(private router: Router, private templeService: TempleService) {}

  ngOnInit(): void {
    this.onCrematoriumList();
  }

  onCrematoriumList() {
    this.templeService.crematoriumListApi().subscribe(res => {
      this.crematoriumList = res;
    });
  }

  onCrematoriumDetailsView(item) {
    const title = item.name.replace(/\s/g , "-");
    const url = `${item.id}\/${title}`;
    this.router.navigate(['/' + UrlContant.CREMATORIUM_DETAILS_URL, url]);
  }
}
