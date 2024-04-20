import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pandit-image-dialog',
  templateUrl: './pandit-image-dialog.component.html',
  styleUrls: ['./pandit-image-dialog.component.scss']
})
export class PanditImageDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PanditImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
