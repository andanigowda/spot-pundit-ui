import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-puja-samagri-dialog',
  templateUrl: './puja-samagri-dialog.component.html',
  styleUrls: ['./puja-samagri-dialog.component.scss']
})
export class PujaSamagriDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PujaSamagriDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {}
}
