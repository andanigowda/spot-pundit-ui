import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlContant } from '../../../constants/router.contant';
import { PujaService } from '../../services/puja-service/puja.service';

@Component({
  selector: 'app-puja-recipes',
  templateUrl: './puja-recipes.component.html',
  styleUrls: ['./puja-recipes.component.scss'],
})
export class PujaRecipesComponent implements OnInit {

  pujaRecipeList: any[] = [];
  selectedReceipes;

  constructor(private router: Router,private _pujaService: PujaService) {}

  ngOnInit(): void {
    this.getPujaRecepiesList();
  }

  getPujaRecepiesList(){
    this._pujaService.pujaRecipesListApi().subscribe((res) => {
        this.pujaRecipeList = res; let i = 1;
        this.pujaRecipeList.forEach(element => {
          element.counter = i;
          i+=1;
        })
        this.selectedReceipes = this.pujaRecipeList[0];
      });
  }

  
  onChangeRecipes(item) {
    this.selectedReceipes = item;
  }

  onDetails(index) {
    this.router.navigate(['/' + UrlContant.PUJA_RECEPES_DETAILS_URL, index]);
  }
}
