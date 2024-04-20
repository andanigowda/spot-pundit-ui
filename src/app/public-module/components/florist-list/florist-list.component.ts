import { UrlContant } from './../../../constants/router.contant';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TempleService } from '../../services/temple-service/temple.service';

@Component({
  selector: 'app-florist-list',
  templateUrl: './florist-list.component.html',
  styleUrls: ['./florist-list.component.scss'],
})
export class FloristListComponent implements OnInit {
  floristList;

  constructor(private router: Router, private templeService: TempleService) {}

  ngOnInit(): void {
    this.onFloristList();
  }

  onFloristList() {
    this.templeService.floristListApi().subscribe(res => {
      this.floristList = res;
    });
  }

  onFloristDetailsView(item) {
    const title = item.name.replace(/\s/g , "-");
    const url = `${item.id}\/${title}`;
    this.router.navigate(['/' + UrlContant.FLORIST_DETAILS_URL, url]);
  }
}
