import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { UrlContant } from './constants/router.contant';
import { SharedService } from './public-module/services/shared.service';
import { LoadingService } from './shared-module/shared-services/loading-service/loading.service';
import { PageTitleService } from './shared-module/shared-services/page-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewChecked, OnInit {
  isLoggedIn = false;
  isFooterHide = true;
  loggedInSubscriber$: any;
  isLoading;

  constructor(
    private sharedService: SharedService,
    private router: Router,
    public loadingService: LoadingService,
    private cdRef: ChangeDetectorRef,
    private pageTitleService: PageTitleService
  ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        let parentTitle = this.pageTitleService.parentUrl();
        let childTitle = this.pageTitleService.childUrl();
        let subChildTitle = this.pageTitleService.subChildUrl();
        let title = subChildTitle ? subChildTitle : (childTitle ? childTitle : parentTitle);
        if (title === "" || title === undefined) {
          title = "";
        }
        this.pageTitleService.setTitle(this.capitalizeFirstLetter(title));
      }
    });
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  ngOnInit() {
    this.subscribeLoggedIn();
  }

  ngAfterViewChecked() {
    this.loadingService.isLoading$.subscribe((res) => {
      this.isLoading = res;
      this.cdRef.detectChanges();
    });
  }

  subscribeLoggedIn = () => {
    this.loggedInSubscriber$ = this.sharedService
      .getLoginStatus()
      .subscribe((value) => {
        this.isLoggedIn = value;
      });
  };

  onActivate(event) {
    window.scrollTo(0, 0);

    if (this.isLoggedIn) {
      this.sharedService.getTimeStamp().subscribe((value) => {
        if (this.sharedService.calculateDiff(value) >= 5) {
          // this.sharedService.logout();
        }
      });
    }

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (
          event.url === `/${UrlContant.USER_DASHBOARD}` ||
          event.url === `/${UrlContant.USER_PROFILE}` ||
          event.url === `/${UrlContant.USER_CHANGE_PASSOWRD}` ||
          event.url === `/${UrlContant.USER_INQUIRY}` ||
          event.url === `/${UrlContant.USER_RATINGS}` ||
          event.url === `/${UrlContant.USER_SHORTLISTED}`
        ) {
          this.isFooterHide = false;
        } else {
          this.isFooterHide = true;
        }
      });
  }
}
