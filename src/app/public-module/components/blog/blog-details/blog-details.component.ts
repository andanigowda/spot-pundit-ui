import { SharedService } from 'src/app/public-module/services/shared.service';
import { UrlContant } from './../../../../constants/router.contant';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicService } from 'src/app/public-module/services/public-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent implements OnInit {
  data;
  blogId;
  blogList: any[] = [];
  type: 'facebook' | 'twitter';
  shareUrl: string = 'link';
  navUrl: string;
  url = 'https://findapandit.com/blog/details/';

  constructor(
    private router: Router,
    private activedRouter: ActivatedRoute,
    private _publicService: PublicService,
    private sanitizer: DomSanitizer,
    private sharedService: SharedService
  ) {
    //this.blogId = this.router.getCurrentNavigation().extras.state != null ? this.router.getCurrentNavigation().extras.state : null;
  }

  ngOnInit(): void {
    this.activedRouter.params.subscribe((param) => {
      this.blogId = param.id;
    });
    this.getBlogDetailById();
    this.sharedService.setTitle('Blog Details');
  }

  getBlogDetailById() {
    const formData: any = new FormData();
    formData.append('slug', this.blogId);
    this._publicService.blogDetailsApi(formData).subscribe((res: any) => {
      this.data = res;
      this.data['description'] = this.sanitizer.bypassSecurityTrustHtml(
        this.data['description']
      );
    });
  }

  backToList() {
    this.router.navigate(['/' + UrlContant.BLOG_URL]);
  }

  descriptionRender(value) {
    return value;
  }

  createNavigationUrl(type, shareUrl) {
    let searchParams = new URLSearchParams();
    this.url = `${this.url}${shareUrl.slug}`;

    // TODO: zrobić map z tego manualnego dziugania

    switch (type) {
      case 'facebook':
        searchParams.set('url', this.url);
        this.navUrl =
          'https://www.facebook.com/sharer/sharer.php?' + searchParams;
        break;
      case 'twitter':
        searchParams.set('url', this.url);
        this.navUrl = 'https://twitter.com/share?' + searchParams;
        break;
    }
  }

  public share() {
    return window.open(this.navUrl, '_blank');
  }

  fb(e, shareUrl) {
    this.url = `${this.url}${shareUrl.slug}`;
    e.preventDefault();
    var facebookWindow = window.open(
      'https://www.facebook.com/sharer/sharer.php?u=' +
      this.url +
      'facebook-popup',
      'height=350,width=600'
    );
    if (facebookWindow.focus) {
      facebookWindow.focus();
    }
    return false;
  }
}
