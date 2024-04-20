import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UrlContant } from 'src/app/constants/router.contant';
import { PublicService } from '../../services/public-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  totalRecords;
  blogList: any;

  constructor(
    private _router: Router,
    private _publicService: PublicService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getBlogsList(1);
  }

  getBlogsList(pageNum) {
    this._publicService.blogListApi(pageNum).subscribe((res) => {
      if (res) {
        this.blogList = res.payload;
        this.totalRecords = res.total_count;
      }
    });
  }
  
  onOpenBlogsDetails(item) {
    this._router.navigate(['/' + UrlContant.BLOG_DETAILS_URL, item.slug]);
  }

  onDescription(data) {
    if (data) {
      const str = data.substring(0, 100);
      return str + '...';
    } else {
      return data;
    }
  }

  onPaginationChange(event) {
    const pageNo = event.pageIndex + 1;
    this.getBlogsList(pageNo);
  }
}
