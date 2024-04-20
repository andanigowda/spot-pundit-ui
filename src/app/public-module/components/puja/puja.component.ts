import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { PujaService } from '../../services/puja-service/puja.service';

@Component({
  selector: 'app-puja',
  templateUrl: './puja.component.html',
  styleUrls: ['./puja.component.scss']
})

export class PujaComponent implements OnInit {

  pujaRecipeList: any[] = [];
  selectedReceipes;

  constructor(
    private _router: Router,
    private _pujaService: PujaService) {
    }

    getPujasList(){
      this._pujaService.pujasListApi().subscribe((res) => {
          this.pujaRecipeList = res;
          let i = 1;
          this.pujaRecipeList.forEach(element => {
            element.counter = i;
            i+=1;
          })
          this.selectedReceipes = this.pujaRecipeList[0];
        });
    }

  ngOnInit(): void {
    this.getPujasList();
  }

  onOpenPrayersDetails(item) {
    this.selectedReceipes = item;
    //  this.router.navigate(['/' + UrlContant.PRAYERS_DETAILS_URL, item.id]);
  }

}
