import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { COMMON_REGEXP } from 'src/app/constants/validations';
import { ValidationsComponent } from 'src/app/shared-module/component/validations/validations.component';
import { SharedListService } from 'src/app/shared-module/shared-services/shared-list.service';
import { ContactUsService } from '../../services/contact-us.service';
import { PublicService } from '../../services/public-service.service';
import { SharedService } from '../../services/shared.service';
import { debounceTime, switchMap } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent extends ValidationsComponent implements OnInit {
  applicationForm: FormGroup;
  countryList: any[] = [];
  stateList: any[] = [];
  cityList: any[] = [];
  zipcodeList: any[] = [];
  zipList: any;
  today = new Date();
  minAge = new Date(this.today.getFullYear() - 21, this.today.getMonth(), this.today.getDate());

  constructor(private fb: FormBuilder, 
    private contactUsService: ContactUsService, 
    private _sharedService: SharedService, 
    private _publicService: PublicService,
    private sharedListService: SharedListService,
    private _authenticationService: AuthenticationService,) {
    super();
  }

  ngOnInit(): void {
    this.applicationForm = this.fb.group({
      first_name: ['',[Validators.maxLength(30)]],
      last_name: ['',[Validators.maxLength(30)]],
      country: [''],
      address: ['',[Validators.maxLength(50)]],
      address2: ['',[Validators.maxLength(50)]],
      city: [''],
      zipcode: [''],
      state: [''],
      unit: [''],
      facebook: [''],
      instagram: [''],
      youtube: [''],
      instituteAff: [''],
      picture: [''],
      checkConsent : [false],
      checkAge : [false],
      checkID: [false],
      checkTnC : [false],
      languages: ['',[Validators.maxLength(100)]],
      name: ['',[Validators.maxLength(100)]],
      occupation: ['',[Validators.maxLength(30)]],
      location: ['',[Validators.maxLength(30)]],
      service_name: ['',[Validators.maxLength(250)]],
      gender: ['',[Validators.maxLength(10)]],
      dob: [''],
      email: ['', [Validators.pattern(COMMON_REGEXP.EMAIL_ADDRESS_REGEXP),Validators.maxLength(75)]],
      phone_number: ['', [Validators.pattern(COMMON_REGEXP.MOBILE_REGEXP), Validators.minLength(9), Validators.maxLength(14)]],
      description: ['',[Validators.maxLength(500)]],
    });
    this.getCountryList();
    this.onChangeZipName();
  }

  getCountryList() {
    this.sharedListService.countryListApi().subscribe((res) => {
      this.countryList = [res];
      this.applicationForm.patchValue({
        country: this.countryList[0].short_name
      })
      this.getStateList(this.countryList[0]);
    });
  }

  getStateList(event) {
    const shortName = event && event.short_name;
    if (shortName) {
      this.sharedListService.stateListApi(shortName).subscribe((res) => {
        this.stateList = res;
      });
    }
  }

  getCityList(event) {
    const state = event && event.value;
    if (state) {
      this.sharedListService.cityListApi(state).subscribe((res) => {
        this.cityList = res;
      });
    }
  }

  getZipList(event){
    const city = event && event.value;
    if (city) {
      this.sharedListService.zipListApi(city).subscribe((res) => {
        this.zipList = res;
      });
    }
  }

  
  onChangeZipName() {
    this.applicationForm
      .get('zipcode')
      .valueChanges.pipe(
        debounceTime(300),
        switchMap((values) => {
          let value = values;
          return this.formControls['zipcode'].value
            ? this._authenticationService.zipcodeListApi(value)
            : this.zipcodeList;
        })
      )
      .subscribe((res) => {
        this.zipcodeList = res.results;
      });
  }


  onSubmitContactsForm(form : FormGroup) {
    if (form.valid) {
      const params = form.value;
      const formData: any = new FormData();
      formData.append('firstName', params['first_name']);
      formData.append('lastName', params['last_name']);
      formData.append('dob', params['dob']);
      formData.append('gender', params['gender']);
      formData.append('serviceOffered', params['service_name']);
      formData.append('located', params['location']);
      formData.append('occupation', params['occupation']);
      formData.append('mobNo', params['phone_number']);
      formData.append('email', params['email']);
      formData.append('address1', params['address']);
      formData.append('address2', params['address2']);
      formData.append('country', params['country']);
      formData.append('state', params['state']);
      formData.append('city', params['city']);
      formData.append('zipcode', params['zipcode']);
      formData.append('associatedInstitute', params['instituteAff']);
      formData.append('instituteName', params['name']);
      formData.append('description', params['description']);
      formData.append('languagesSpoken', params['languages']);
      formData.append('facebook', params['facebook']);
      formData.append('instagram', params['instagram']);
      formData.append('youtube', params['youtube']);
      formData.append('profilePicture', params['picture']);
      this._publicService.submitApplicationFormApi(formData).subscribe((res) => {
        this._sharedService.onShowMessageBar(res.message);
      },(error : any) => {
        this._sharedService.onShowMessageBar(error.error.message);
      });
    }
  }

  onUploadImage(event){
    this.applicationForm.patchValue({
      picture: event.target.files[0],
    });
  }

  get formControls() {
    return this.applicationForm.controls;
  }

  validateCheckbox(){
    let form = this.applicationForm.value;
    if(form.checkAge && form.checkID && form.checkTnC && form.checkConsent){
      return false
    }else{
      return true
    }
  }

}
