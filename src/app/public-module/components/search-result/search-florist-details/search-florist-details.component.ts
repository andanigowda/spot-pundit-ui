import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { TempleService } from 'src/app/public-module/services/temple-service/temple.service';
import { PanditImageDialogComponent } from '../../pandits/pandit-profile/dialogs/pandit-image-dialog/pandit-image-dialog.component';

@Component({
  selector: 'app-search-florist-details',
  templateUrl: './search-florist-details.component.html',
  styleUrls: ['./search-florist-details.component.scss']
})
export class SearchFloristDetailsComponent implements OnInit {

  floristId;
  floristDetails;

  constructor(
    private templeService: TempleService,
    private router: Router,
    private activedRouter: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.activedRouter.params.subscribe((param) => {
      this.floristId = param.id.split('/');
      this.onFloristDetailsApi(this.floristId);
    });
  }

  onFloristDetailsApi(id) {
    this.templeService.floristDetailsApi(id[0]).subscribe((res) => {
      this.floristDetails = res;
    });
  }

  addressRender(value) {
    const address = value.address;
    const city = value.city;
    const state = value.state;
    const zip = value.zipCode;
    const url = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAAJgaNyDJEsTb6uDvu05O2_7_zMfJU0jU&q="+ address.replace(/\s/g, '+') + '+' + city.replace(/\s/g, '+') + '+' + state.replace(/\s/g, '+') + '+' + zip;
   return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onOpenImageDialog(imgUrl) {
    const dialogRef = this.dialog.open(PanditImageDialogComponent, {
      panelClass: '',
      data: imgUrl,
    });

    dialogRef.afterClosed().subscribe(res => {

    })
  }
}
