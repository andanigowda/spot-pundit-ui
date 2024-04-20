import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TempleService } from 'src/app/public-module/services/temple-service/temple.service';

@Component({
  selector: 'app-search-temple-details',
  templateUrl: './search-temple-details.component.html',
  styleUrls: ['./search-temple-details.component.scss'],
})
export class SearchTempleDetailsComponent implements OnInit {

  templeId;
  templeDetails;

  constructor(
    private templeService: TempleService,
    private router: Router,
    private activedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activedRouter.params.subscribe((param) => {
      this.templeId = param.id.split('/');
      this.onTempleDetails(this.templeId);
    });
  }

  onTempleDetails(id) {
    const formData: any = new FormData();
    formData.append('temple_id', id[0]);
    this.templeService.templeDetailsApi(formData).subscribe((res) => {
      this.templeDetails = res;
    });
  }
}
