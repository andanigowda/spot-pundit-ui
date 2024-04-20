import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PujaService } from 'src/app/public-module/services/puja-service/puja.service';

@Component({
  selector: 'app-puja-samagri-details',
  templateUrl: './puja-samagri-details.component.html',
  styleUrls: ['./puja-samagri-details.component.scss'],
})

export class PujaSamagriDetailsComponent implements OnInit {

  data;
  samgriId;
  pujaSamagriList: any[] = [];

  constructor(
    private router: Router,
    private activedRouter: ActivatedRoute,
    private location: Location,
    private _pujaService : PujaService
  ) {}

  ngOnInit(): void {
    this.activedRouter.params.subscribe((param) => {
      this.samgriId = param.id.split('/');
      this.getSamagriDetailById();
    });
  }

  getSamagriDetailById(){
    const formData: any = new FormData();
    formData.append('id', this.samgriId[0]);
    this._pujaService.pujaSamagriDetailsApi(formData).subscribe((res:any)=>{
      this.data = res;
    });
  }
  backToList() {
    this.location.back();
  }
}
