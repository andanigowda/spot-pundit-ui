import { UrlContant } from 'src/app/constants/router.contant';
import { Router } from '@angular/router';
import { SharedService } from './../../public-module/services/shared.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, Input, HostListener } from '@angular/core';
import { fade } from './animate';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: fade,
})
export class HeaderComponent implements OnInit {
  @Input() loginStatus = false;

  headerfix;
  state = 'in';
  counter = 0;
  choice = 2;
  enableAnimation = false;
  isMobileView = false;
  mediaQueryList;
  imageSource = '';
  userDetails;
  imgSrc1 = 'assets/img/logo.png';
  imgSrc2 = 'assets/img/whitelogonew.png';
  profileUrlName;
  changePasswordUrlName;
  userImage;
  userName;

  constructor(
    mediaMatcher: MediaMatcher,
    private sharedService: SharedService,
    private router: Router
  ) {
    this.mediaQueryList = mediaMatcher.matchMedia('(max-width: 600px)');
    if (this.mediaQueryList.matches) {
      this.isMobileView = false;
    } else {
      this.isMobileView = true;
    }
  }

  ngOnInit(): void {
    this.imageSource = this.imgSrc1;
    this.initializationUserDetails();
  }

  ngOnChanges(changes) {
    if (this.loginStatus && changes['loginStatus']) {
      this.initializationUserDetails();
    }
  }

  initializationUserDetails() {
    this.sharedService.getLoggedInUserData().subscribe((value) => {
      this.userDetails = value;
      let userRole = JSON.parse(this.sharedService.getUserRole());

      switch (userRole) {
        case 'user':
          this.profileUrlName = UrlContant.USER_PROFILE;
          this.changePasswordUrlName = UrlContant.USER_CHANGE_PASSOWRD;
          this.userImage = this.userDetails && this.userDetails['profile_photo'] ? this.userDetails['profile_photo'] : '';
          this.userName = this.userDetails && this.userDetails['first_name'] ? this.userDetails['first_name'] : '';
          break;

        case 'temple':
          this.profileUrlName = UrlContant.TEMPLE_PROFILE_INFO;
          this.changePasswordUrlName = UrlContant.TEMPLE_CHANGE_PASSOWRD;
          this.userImage = this.userDetails && this.userDetails['temple_image'] ? this.userDetails['temple_image'] : '';
          this.userName = this.userDetails && this.userDetails['name'] ? this.userDetails['name'] : '';
          break;

        case 'pandit':
          this.profileUrlName = UrlContant.DASHBOARD;
          this.changePasswordUrlName = UrlContant.CHANGE_PASSOWRD;
          this.userImage = this.userDetails && this.userDetails['profile_image'] ? this.userDetails['profile_image'] : '';
          this.userName = this.userDetails && this.userDetails['firstName'] ? this.userDetails['firstName'] : '';
          break;

        case 'florist':
          this.profileUrlName = UrlContant.FLORIST_PROFILE_INFO;
          this.changePasswordUrlName = UrlContant.FLORIST_CHANGE_PASSOWRD;
          this.userImage = this.userDetails && this.userDetails['logo'] ? this.userDetails['logo'] : '';
          this.userName = this.userDetails && this.userDetails['firstName'] ? this.userDetails['firstName'] : '';
          break;

        case "crematorium":
          this.profileUrlName = UrlContant.CREMATORIUM_PROFILE_INFO;
          this.changePasswordUrlName = UrlContant.CREMATORIUM_CHANGE_PASSOWRD;
          this.userImage = this.userDetails && this.userDetails['logo'] ? this.userDetails['logo'] : '';
          this.userName = this.userDetails && this.userDetails['name'] ? this.userDetails['name'] : '';
          break;

        default:
          // this.router.navigate(['/' + UrlContant.HOME_URL]);
          //this.logout();
          break;
      }
    });
  }

  onToggleMenu() {
    if (this.mediaQueryList.matches) {
      this.isMobileView = !this.isMobileView;
    }
  }

  changePasswordUrl() {
    this.router.navigate(['/' + this.changePasswordUrlName]);
  }

  profileUrl() {
    this.router.navigate(['/' + this.profileUrlName]);
  }

  get homeUrl() {
    return '/' + UrlContant.HOME_URL;
  }

  get aboutusUrl() {
    return '/' + UrlContant.ABOUT_US_URL;
  }

  get pujaUrl() {
    return '/' + UrlContant.PUJA_URL;
  }

  get contactusUrl() {
    return '/' + UrlContant.CONTACT_US_URL;
  }

  get panditUrl() {
    return '/' + UrlContant.PANDIT_URL;
  }

  get userLoginUrl() {
    return '/' + UrlContant.USER_LOGIN;
  }

  get panditLoginUrl() {
    return '/' + UrlContant.PANDIT_LOGIN;
  }

  get calenderUrl() {
    return '/' + UrlContant.CALENDER_URL;
  }

  get endorsersUrl() {
    return '/' + UrlContant.ENDORSER_URL;
  }

  get crematoriumUrl() {
    return '/' + UrlContant.CREMATORIUM_LIST_URL;
  }

  get floristUrl() {
    return '/' + UrlContant.FLORIST_LIST_URL;
  }

  get crematoriumLoginUrl() {
    return '/' + UrlContant.CREMATORIUM_LOGIN;
  }

  get floristLoginUrl() {
    return '/' + UrlContant.FLORIST_LOGIN;
  }

  get templeLoginUrl() {
    return '/' + UrlContant.TEMPLE_LOGIN;
  }

  get blogsUrl() {
    return '/' + UrlContant.BLOG_URL;
  }
  
  get shemarooStoreUrl() {
    return '/' + UrlContant.SHEMAROO_STORE_URL;
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

  get godUrl() {
    return '/' + UrlContant.GODS_URL;
  }

  get hinduGlossery() {
    return '/' + UrlContant.HINDU_GROSSARY_URL;
  }

  get hinduScriptures() {
    return '/' + UrlContant.HINDI_SCRIPTURES_URL;
  }

  get prayersUrl() {
    return '/' + UrlContant.PRAYERS_URL;
  }

  get pujaRecipes() {
    return '/' + UrlContant.PUJA_RECEPES_URL;
  }

  get pujaSamgri() {
    return '/' + UrlContant.PUJA_SAMAGRI_URL;
  }

   get samskaraUrl() {
    return '/' + UrlContant.SAMSKARA_URL;
  }

  get templesUrl() {
    return '/' + UrlContant.TEMPLE_LIST_URL;
  }

  get templeUrl() {
    return '/' + UrlContant.TEMPLE_URL;
  }

  get announcementUrl() {
    return '/' + UrlContant.ANNOUNCEMENT_URL;
  }

  get eligibilityUrl() {
    return '/' + UrlContant.ELIGIBILITY_URL;
  }

  get applicationUrl() {
    return '/' + UrlContant.APPLICATION_URL;
  }
  
  get panchangUrl() {
    return '/' + UrlContant.PANCHANG;
  }

  get applicationFormUrl() {
    return '/' + UrlContant.APPLICATION_FORM_URL;
  }

  toggleImg() {
    if (this.choice === 1) {
      this.imageSource = this.imgSrc1;
      this.choice = 2;
    } else {
      this.imageSource = this.imgSrc2;
      this.choice = 1;
    }
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (localStorage.getItem('headerfix') === 'true') {
      this.headerfix = true;
    } else {
      this.headerfix = false;
      this.enableAnimation = false;
    }
  }

  onDone($event) {
    if (this.enableAnimation) {
      if (this.counter === 1) {
        this.toggleImg();
      }
      this.toggleState();
    }
  }

  toggleState() {
    if (this.counter < 2) {
      this.state = this.state === 'in' ? 'out' : 'in';
      this.counter++;
    }
  }

  logout() {
    this.sharedService.logout();
    this.router.navigate(['/' + UrlContant.HOME_URL]);
  }
}
