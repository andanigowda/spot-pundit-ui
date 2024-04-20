import { SharedService } from './../../services/shared.service';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { ApiContant } from 'src/app/constants/api.constants';
import { UrlContant } from 'src/app/constants/router.contant';
import { PanditDashboardService } from 'src/app/feature-modules/pandit-dashboard-module/services/pandit-dashboard.service';
import { SharedListService } from 'src/app/shared-module/shared-services/shared-list.service';
import { TempleService } from '../../services/temple-service/temple.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;
  @ViewChild('citySingleSelect', { static: true }) citySingleSelect: MatSelect;

  filterForm: FormGroup;
  isCollapseSearchBar;
  countryList = [];
  stateList = [];
  cityList = [];
  postCodeList = [];
  languageList = [];
  countryId;
  stateId;
  searchResultList: any[];
  searchResultTempleList: any[];
  crematoriumList: any[];
  floristList: any[];
  resultCount = 0;
  otherResultCount = 0;
  resultObj;
  totalRow;
  totalPages;
  pageNo;
  loading = false;
  param;
  formParams;
  paramMessage;
  userDetails;

  imgUrl = ApiContant.IMAGE_URL;

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'm';
    }

    return value;
  }

  public stateFilterCtrl: FormControl = new FormControl();
  public filteredState: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  public cityFilterCtrl: FormControl = new FormControl();
  public filteredCity: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  public zipFilterCtrl: FormControl = new FormControl();
  public filteredZipcode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  protected _onDestroy = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService,
    private templeService: TempleService,
    private sharedListService: SharedListService,
    private panditDashboardService: PanditDashboardService
  ) {}

  ngOnInit(): void {
    const user = this.sharedService.getUserDetails();
    this.userDetails = user;
    this.createFilterForm();
    this.getCountryList();
    this.getLanguageList();
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  initialMethod() {
    this.sharedListService.countryListApi().subscribe((res) => {
      this.countryList = res;
      this.filterForm.get('country').setValue(229);
      this.getCountryList();
    });
  }

  getLanguageList() {
    this.panditDashboardService.getLanguageListApi().subscribe((response) => {
      this.languageList = response;
    });
  }

  getCountryList() {
    this.sharedListService.countryListApi().subscribe((res) => {
      this.countryList = [res];
      this.filterForm.patchValue({
        country: this.countryList[0]['short_name'],
      });
      this.getStateList(this.countryList[0]['short_name']);
    });
  }

  getStateList(country_short_name) {
    this.sharedListService.stateListApi(country_short_name).subscribe((res) => {
      this.stateList = res;
      this.filteredState.next(this.stateList.slice());
      this.stateFilterCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterStates();
        });
      this.loading = false;
    });
  }

  getCityList(value) {
    this.sharedListService.cityListApi(value).subscribe((res) => {
      this.cityList = res;

      this.cityFilterCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterCity();
        });
      this.loading = false;
    });
  }

  createFilterForm() {
    this.filterForm = this.fb.group({
      type: [''],
      country: [''],
      state: [''],
      city: [''],
      zip: ['', [Validators.minLength(1), Validators.maxLength(5)]],
      puja: [''],
      language: [''],
      radius: ['10'],
      userId: [
        this.userDetails && this.userDetails.id ? this.userDetails.id : '',
      ],
    });

    this.searchApiCall();
  }

  searchApiCall() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.param = params;
      this.loading = true;
      this.onApiCall(this.param);
      this.filterForm.patchValue({
        type: params.type,
        zip: params.zip,
        countryid: params.country && params.country,
        stateid: params.state && params.state.id,
        cityId: params.city && params.city.id,
        userId: this.userDetails && this.userDetails.id,
      });
    });
  }

  onSearchFilter(form: FormGroup) {
    if (form.valid) {
      const params = form.value;
      this.formParams = {
        country: this.countryList[0]['short_name'],
        state: params.state,
        city: params.city,
        zip: params.zip,
        type: params.type,
        language: params.language,
        puja: params.puja,
        radius: params.radius,
        userId: this.userDetails && this.userDetails.id,
      };
      this.loading = true;
      const queryParams = `9/${params.type}`;
      this.searchDetailsApi(this.formParams);
    }
  }

  searchDetailsApi(formParams) {
    this.onApiCall(formParams);
    this.loading = false;
    this._router.navigate(['/' + UrlContant.SEARCH_RESULT_URL], {
      queryParams: formParams,
    });
  }

  onApiCall(formData) {
    this.resultCount = 0;
    this.otherResultCount = 0;
    this.paramMessage = '';
    for (var key in formData) {
      if (formData.hasOwnProperty(key)) {
        if (formData[key] === '') delete formData[key];
      }
    }

    if (formData.type === 'pandit') {
      this.templeService.searchDetailsApi(formData).subscribe(
        (res) => {
          if (res && res['result'].length) {
            this.searchResultTempleList = [];
            this.crematoriumList = [];
            this.floristList = [];
            this.searchResultList = res['result'];
            this.totalRow = res['result'].totalItem;
            this.totalPages = res['result'].totalpages;
            this.pageNo = res['result'].pageNo;
            this.loading = false;
            this.resultCount = res['result'].length;
            this.resultObj = null;
          } else {
            this.resultObj = res['other'];
            this.searchResultList = res['other'];
            this.paramMessage = res['message'];
            this.otherResultCount = res['other'].length;
          }
        },
        (err) => {
          this.handleError(err);
        }
      );
    } else if (formData.type === 'temple') {
      delete formData['language'];
      delete formData['puja'];
      this.templeService.templeSearchApi(formData).subscribe(
        (res) => {
          if (res && res['result'].length) {
            this.searchResultList = [];
            this.crematoriumList = [];
            this.floristList = [];
            this.searchResultTempleList = res['result'];
            this.totalRow = res['result'].totalItem;
            this.totalPages = res['result'].totalpages;
            this.pageNo = res['result'].pageNo;
            this.loading = false;
            this.resultCount = res['result'].length;
            this.resultObj = null;
          } else {
            this.searchResultList = [];
            this.crematoriumList = [];
            this.floristList = [];
            this.resultObj = res['other'];
            this.searchResultTempleList = res['other'];
            this.paramMessage = res['message'];
            this.otherResultCount = res['other'].length;
          }
        },
        (err) => {
          this.handleError(err);
        }
      );
    } else if (formData.type === 'crematorium') {
      delete formData['language'];
      delete formData['puja'];
      this.templeService.crematoriumSearchApi(formData).subscribe(
        (res) => {
          if (res && res['result'].length) {
            this.searchResultList = [];
            this.searchResultTempleList = [];
            this.floristList = [];
            this.crematoriumList = res['result'];
            this.totalRow = res['result'].totalItem;
            this.totalPages = res['result'].totalpages;
            this.pageNo = res['result'].pageNo;
            this.loading = false;
            this.resultCount = res['result'].length;
            this.resultObj = null;
          } else {
            this.searchResultList = [];
            this.searchResultTempleList = [];
            this.floristList = [];
            this.resultObj = res['other'];
            this.crematoriumList = res['other'];
            this.paramMessage = res['message'];
            this.otherResultCount = res['other'].length;
          }
        },
        (err) => {
          this.handleError(err);
        }
      );
    } else {
      delete formData['language'];
      delete formData['puja'];
      this.templeService.floristSearchApi(formData).subscribe(
        (res) => {
          if (res && res['result'].length) {
            this.searchResultList = [];
            this.searchResultTempleList = [];
            this.crematoriumList = [];
            this.floristList = res['result'];
            this.totalRow = res['result'].totalItem;
            this.totalPages = res['result'].totalpages;
            this.pageNo = res['result'].pageNo;
            this.loading = false;
            this.resultCount = res['result'].length;
            this.resultObj = null;
          } else {
            this.searchResultList = [];
            this.searchResultTempleList = [];
            this.crematoriumList = [];
            this.resultObj = res['other'];
            this.floristList = res['other'];
            this.paramMessage = res['message'];
            this.otherResultCount = res['other'].length;
          }
        },
        (err) => {
          this.handleError(err);
        }
      );
    }
  }

  handleError(err) {
    this.searchResultList = [];
    this.paramMessage = [];
    this.searchResultTempleList = [];
    this.crematoriumList = [];
    this.floristList = [];
    this.sharedService.onShowMessageBar(err.error.message);
  }

  handlePage(event) {
    this.searchDetailsApi(this.formParams);
  }

  onToggleSearchBar() {
    this.isCollapseSearchBar = !this.isCollapseSearchBar;
  }

  filterStates() {
    if (!this.stateList) {
      return;
    }
    // get the search keyword
    let search = this.stateFilterCtrl.value;
    if (!search) {
      this.filteredState.next(this.stateList.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredState.next(
      this.stateList.filter(
        (state) => state.state.toLowerCase().indexOf(search) > -1
      )
    );
  }

  filterCity() {
    if (!this.cityList) {
      return;
    }
    // get the search keyword
    let search = this.cityFilterCtrl.value;
    if (!search) {
      this.filteredCity.next(this.cityList.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredCity.next(
      this.cityList.filter(
        (city) => city.city.toLowerCase().indexOf(search) > -1
      )
    );
  }

  setInitialValue() {
    this.filteredState
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.singleSelect.compareWith = (a: any, b: any) => a && b && a === b;
      });

    this.filteredCity
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.citySingleSelect.compareWith = (a: any, b: any) =>
          a && b && a.id === b.id;
      });
  }

  onGetArray(ratingCount) {
    ratingCount = Math.round(ratingCount * 10) / 10;
    return Array.from(Array(ratingCount).keys());
  }

  onPanditDetailsPage(obj) {
    const title = obj.firstName.replace(/\s/g , "-");
    const url = `${obj.id}\/${title}`;
    this._router.navigate(['/' + UrlContant.PANDIT_PROFILE_URL, url]);
  }

  onTempleDetailsPage(obj) {
    const title = obj.name.replace(/\s/g , "-");
    const url = `${obj.id}\/${title}`;
    this._router.navigate(['/' + UrlContant.TEMPLE_DETAILS_URL, url]);
  }

  onCremitoriumDetailsPage(obj) {
    const title = obj.name.replace(/\s/g , "-");
    const url = `${obj.id}\/${title}`;
    this._router.navigate([
      '/' + UrlContant.CREMATORIUM_SEARCH_DETAILS_URL,
      url,
    ]);
  }

  onFloristDetailsPage(obj) {
    const title = obj.name.replace(/\s/g , "-");
    const url = `${obj.id}\/${title}`;
    this._router.navigate([
      '/' + UrlContant.FLORIST_SEARCH_DETAILS_URL,
      url,
    ]);
  }

  onAddFavoriteUser(item, event) {
    event.stopPropagation();
    const visitorId = this.userDetails && this.userDetails['id'];
    if (visitorId) {
      const formData = new FormData();
      formData.append('visitor_id', visitorId);
      formData.append('pandit_id', item['id']);

      this.templeService.addFavoriteListApi(formData).subscribe((res) => {
        if (res && res['message']) {
          this.sharedService.onShowMessageBar(res['message']);
        }
      });
    } else {
      this.sharedService.onShowMessageBar('Please sign up or login as user');
      this._router.navigate(['/' + UrlContant.USER_LOGIN]);
    }
  }

  onRemoveFavoriteUser(item, event) {
    event.stopPropagation();
    const visitorId = this.userDetails && this.userDetails['id'];
    if (visitorId) {
      const formData = new FormData();
      formData.append('visitor_id', visitorId);
      formData.append('pandit_id', item['id']);

      this.templeService.removeFavoriteListApi(formData).subscribe((res) => {
        if (res && res['message']) {
          this.sharedService.onShowMessageBar(res['message']);
        }
      });
    } else {
      this.sharedService.onShowMessageBar('Please sign up or login as user');
      this._router.navigate(['/' + UrlContant.USER_LOGIN]);
    }
  }

  get controls() {
    return this.filterForm.controls;
  }

  onDescription(data) {
    if (data) {
      const str = data.substring(0, 100);
      return str + '...';
    } else {
      return data;
    }
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
