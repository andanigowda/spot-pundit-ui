import { SharedService } from './../../services/shared.service';
import {
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UrlContant } from 'src/app/constants/router.contant';
import { startWith, map, debounceTime, switchMap } from 'rxjs/operators';
import { PublicService } from '../../services/public-service.service';

const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter((item) => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('audio', { static: true }) audio: any;

  filterForm: FormGroup;
  isHeaderColorChange: any = 'false';
  zipcodeList: any[] = [];
  userDetails;

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private publicService: PublicService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    const user = this.sharedService.getUserDetails();
    this.userDetails = user;
    this.createFilterForm();
    this.onChangeZipCode();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.audio.nativeElement.volume = 0.01;
    }, 100);
  }

  createFilterForm() {
    this.filterForm = this.fb.group({
      type: ['pandit'],
      zip: ['', [Validators.pattern('^[0-9 ]+$'), Validators.minLength(1), Validators.maxLength(5)]],
      userId: [this.userDetails && this.userDetails.id ? this.userDetails.id : '']
    });
  }

  onSearchFilter(form: FormGroup) {
    if (form.valid) {
      const params = form.value;
      params['userId'] ? params['userId'] : delete params['userId'];

      this._router.navigate(['/' + UrlContant.SEARCH_RESULT_URL], {
        queryParams: params,
      });
    }
  }

  onChangeZipCode() {
    this.filterForm.get('zip').valueChanges.pipe(
      debounceTime(300),
      switchMap(values => {
        let value = values;
        return this.formControls['zip'].value ? this.publicService.zipcodeListApi(value)
        : this.zipcodeList;
      })
    ).subscribe(res => {
      this.zipcodeList = res.results
    })
  }

  filterGroup(value) {
    if (value) {
      this.publicService.zipcodeListApi(value).subscribe((res) => {
        this.zipcodeList = res.results;
        return this.zipcodeList;
      });
    }

    return this.zipcodeList;
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

  get templeUrl() {
    return '/' + UrlContant.TEMPLE_URL;
  }

  get godsUrl() {
    return '/' + UrlContant.GODS_URL;
  }

  get pujaSamgriUrl() {
    return '/' + UrlContant.PUJA_SAMAGRI_URL;
  }

  get prayersUrl() {
    return '/' + UrlContant.PRAYERS_URL;
  }

  get hinduUrl() {
    return '/' + UrlContant.HINDI_SCRIPTURES_URL;
  }

  get pujaRecepesUrl() {
    return '/' + UrlContant.PUJA_RECEPES_URL;
  }

  get formControls() {
    return this.filterForm.controls;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const activeElem = Math.floor(
      window.pageYOffset / document.documentElement.clientHeight
    );

    if (activeElem >= 1) {
      this.isHeaderColorChange = 'true';
      localStorage.setItem('headerfix', this.isHeaderColorChange);
    } else {
      this.isHeaderColorChange = 'false';
      localStorage.setItem('headerfix', this.isHeaderColorChange);
    }
  }

  ngOnDestroy(): void {
    this.isHeaderColorChange = 'false';
    localStorage.setItem('headerfix', this.isHeaderColorChange);
  }
}
