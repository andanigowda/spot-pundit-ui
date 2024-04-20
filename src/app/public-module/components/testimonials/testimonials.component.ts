import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UrlContant } from 'src/app/constants/router.contant';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})

export class TestimonialsComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  testimonialDetails() {
    this.router.navigate(['/' + UrlContant.TESTIMONIAL_DETAILS_URL, 1]);
  }
}
