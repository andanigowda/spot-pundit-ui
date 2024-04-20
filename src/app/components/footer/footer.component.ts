import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UrlContant } from 'src/app/constants/router.contant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  get homeUrl() {
    return '/' + UrlContant.HOME_URL;
  }

  get aboutusUrl() {
    return '/' + UrlContant.ABOUT_US_URL;
  }

  get pujaUrl() {
    return '/' + UrlContant.TEMPLE_URL;
  }

  get templeUrl() {
    return '/' + UrlContant.TEMPLE_URL;
  }

  get contactusUrl() {
    return '/' + UrlContant.CONTACT_US_URL;
  }

  get faqsUrl() {
    return '/' + UrlContant.FAQS_URL;
  }

  get blogsUrl() {
    return '/' + UrlContant.BLOG_URL;
  }

  get panditUrl() {
    return '/' + UrlContant.PANDIT_URL;
  }

  get hinduGlossaryUrl() {
    return '/' + UrlContant.HINDU_GROSSARY_URL;
  }

  get testimonialsUrl() {
    return '/' + UrlContant.TESTIMONIALS_URL;
  }

  get whyusUrl() {
    return '/' + UrlContant.WHY_US_URL;
  }

  get partnerCollaborateUrl() {
    return '/' + UrlContant.PARTNER_COLLABRATE_URL;
  }

  get careerUrl() {
    return '/' + UrlContant.CAREER_URL;
  }

  get partnerListUrl() {
    return '/' + UrlContant.PARTNER_LIST_URL;
  }

  get samskaraUrl() {
    return '/' + UrlContant.SAMSKARA_URL;
  }

  get yogaUrl() {
    return '/' + UrlContant.YOGA_URL;
  }

  get astrologuUrl() {
    return '/' + UrlContant.ASTROLOGY_URL;
  }

  get meditationUrl() {
    return '/' + UrlContant.MEDITATION_URL;
  }

  get numerologyUrl() {
    return '/' + UrlContant.NUMEROLOGY_URL;
  }

  get palmUrl() {
    return '/' + UrlContant.PALMISTYR_URL;
  }

  get tarrotUrl() {
    return '/' + UrlContant.TARROT_CARD_READING_URL;
  }

  get vaastuUrl() {
    return '/' + UrlContant.VASTU_SHASTRA_URL;
  }

  get applicationFormUrl() {
    return '/' + UrlContant.APPLICATION_FORM_URL;
  }

  get endorsersUrl() {
    return '/' + UrlContant.ENDORSER_URL;
  }

  get crematoriumUrl() {
    return '/' + UrlContant.CREMATORIUM_LIST_URL;
  }

  get shemarooStoreUrl() {
    return '/' + UrlContant.SHEMAROO_STORE_URL;
  }

  get floristUrl() {
    return '/' + UrlContant.FLORIST_LIST_URL;
  }

  onOpenContactUsPage() {
    this.router.navigate(['/' + UrlContant.CONTACT_US_URL]);
  }
}
