import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-landing-testimonial',
  templateUrl: './landing-testimonial.component.html',
  styleUrls: ['./landing-testimonial.component.scss'],
})
export class LandingTestimonialComponent implements OnInit {
  mediaQuery = window.matchMedia('(min-width: 320px) and (max-width: 767px)');

  config: any = {
    direction: 'horizontal',
    slidesPerView: 3,
    navigation: true,
    pagination: true,
    scrollbar: false,
    spaceBetween: 20,
    paginationClickable: true,
    // autoPlay: 1000,
    // loop: true
  };

  constructor() {}

  ngOnInit(): void {
    if (this.mediaQuery.matches) {
      this.config = {
        direction: 'horizontal',
        slidesPerView: 1,
        navigation: true,
        pagination: true,
        scrollbar: false,
        spaceBetween: 20,
        paginationClickable: true,
      };
    }
  }
}
