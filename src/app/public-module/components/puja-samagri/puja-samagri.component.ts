import { Component, OnInit } from '@angular/core';
import { PujaSamagriDialogComponent } from './puja-samagri-dialog/puja-samagri-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UrlContant } from '../../../constants/router.contant';
import { PujaService } from '../../services/puja-service/puja.service';

@Component({
  selector: 'app-puja-samagri',
  templateUrl: './puja-samagri.component.html',
  styleUrls: ['./puja-samagri.component.scss'],
})
export class PujaSamagriComponent implements OnInit {
  pujaSamagriList: any[] = [];

  constructor(private dialog: MatDialog, private router: Router,private _pujaService: PujaService) {}
  
  ngOnInit(): void {
    this.getPujaSamagriList();
  }

  getPujaSamagriList(){
    this._pujaService.pujaSamagriListApi().subscribe((res) => {
        this.pujaSamagriList = res;
        this.pujaSamagriList.sort(this.compare);
      });
  }

   compare(a, b) {
    const bandA = a.id;
    const bandB = b.id;
  
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }

  onOpenOujaDetails(item) {
    const title = item.name.replace(/\s/g , "-");
    const url = `${item.id}\/${title}`;
    this.router.navigate(['/' + UrlContant.PUJA_SAMAGRI_DETAILS_URL, url]);
  }
}
