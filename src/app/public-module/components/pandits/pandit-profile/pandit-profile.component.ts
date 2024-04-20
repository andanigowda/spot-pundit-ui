import { SharedService } from 'src/app/public-module/services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { PanditReviewDialogComponent } from './dialogs/pandit-review-dialog/pandit-review-dialog.component';
import { PanditInquiryDialogComponent } from './dialogs/pandit-inquiry-dialog/pandit-inquiry-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { PanditService } from 'src/app/public-module/services/pandit-service/pandit.service';
import { SharedListService } from 'src/app/shared-module/shared-services/shared-list.service';
import { ApiContant } from 'src/app/constants/api.constants';
import { PanditMessageDialogComponent } from './dialogs/pandit-message-dialog/pandit-message-dialog.component';

@Component({
  selector: 'app-pandit-profile',
  templateUrl: './pandit-profile.component.html',
  styleUrls: ['./pandit-profile.component.scss'],
})

export class PanditProfileComponent implements OnInit {
  panditDetails;
  cityDetails;
  isLoading = false;
  imgUrl = ApiContant.IMAGE_URL;

  constructor(
    private dialog: MatDialog,
    private activeredRoute: ActivatedRoute,
    private sharedService: SharedListService,
    private sdService: SharedService,
    private panditService: PanditService
  ) {}

  ngOnInit(): void {
    this.activeredRoute.params.subscribe((param) => {
      this.isLoading = true;
      const id = param.id.split('/');
      const formData: any = new FormData();
      formData.append('pandit_id', id[0]);

      this.panditService.panditDetailsApi(formData).subscribe((res) => {
        this.panditDetails = res;
        this.isLoading = false;
      //  this.getMasterDetailsApi(res);
      });
    });
    this.sdService.setTitle('Pandit Information');
  }

  onGetArray(ratingCount) {
    ratingCount = Math.round(ratingCount * 10) / 10;
    return Array.from(Array(ratingCount).keys());
  }

  onOpenReviewDialog() {
    const dialogRef = this.dialog.open(PanditReviewDialogComponent, {
      panelClass: 'review-dialog-panel-container',
      data: '',
    });
  }

  onOpenInquiryDialog() {
    const dialogRef = this.dialog.open(PanditInquiryDialogComponent, {
      panelClass: 'inqiry-dialog-panel-container',
      data: '',
    });
  }

  onOpenMessageDialog() {
    const dialogRef = this.dialog.open(PanditMessageDialogComponent, {
      panelClass: 'inqiry-dialog-panel-container',
      data: '',
    });
  }
}
