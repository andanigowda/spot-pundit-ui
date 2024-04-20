import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PublicService } from '../../services/public-service.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})

export class CustomerDetailsComponent implements OnInit {

  @Input() panditDetails: any;

  constructor(private dialog: MatDialog, 
    private activeredRoute: ActivatedRoute,
    private publicService: PublicService,) { }

  ngOnInit(): void {  
    this.activeredRoute.params.subscribe((param) => {
    const id = param.id.split('/');
    this.publicService.getCustomerDetails(id).subscribe((res) => {
      this.panditDetails = res;
    });
  });
  }
}
