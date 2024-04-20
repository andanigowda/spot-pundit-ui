import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PanditImageDialogComponent } from '../dialogs/pandit-image-dialog/pandit-image-dialog.component';
import { PanditInquiryDialogComponent } from '../dialogs/pandit-inquiry-dialog/pandit-inquiry-dialog.component';

@Component({
  selector: 'app-pandit-information',
  templateUrl: './pandit-information.component.html',
  styleUrls: ['./pandit-information.component.scss']
})

export class PanditInformationComponent implements OnInit {

  @Input() panditDetails: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onGetArray(ratingCount) {
    ratingCount = Math.round(ratingCount * 10) / 10;
    return Array.from(Array(ratingCount).keys());
  }

  onOpenInquiryDialog() {
    const dialogRef = this.dialog.open(PanditInquiryDialogComponent, {
      panelClass: 'inqiry-dialog-panel-container',
      data: this.panditDetails,
    });

    dialogRef.afterClosed().subscribe(res => {

    })
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
