import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBar,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { COMMON_REGEXP } from 'src/app/constants/validations';
import { AuthenticationService } from 'src/app/public-module/services/authentication.service';
import { SharedService } from 'src/app/public-module/services/shared.service';
import { ValidationsComponent } from 'src/app/shared-module/component/validations/validations.component';
import { PublicService } from '../../services/public-service.service';

@Component({
  selector: 'app-partner-listing',
  templateUrl: './partner-listing.component.html',
  styleUrls: ['./partner-listing.component.scss'],
})
export class PartnerListingComponent
  extends ValidationsComponent
  implements OnInit {
  // Form Variables
  loginForm: FormGroup;



  filename: any;
  fileErrorMessage: string;
  userIP: any;

  constructor(
    private _fb: FormBuilder,
    private _sharedService: SharedService,
    private _publicService: PublicService
  ) {
    super();
  }

  ngOnInit(): void {
    this.createVendorForm();
    this.getIp();
  }

  createVendorForm() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.pattern(COMMON_REGEXP.EMAIL_ADDRESS_REGEXP)]],
      website: ['', [Validators.pattern(COMMON_REGEXP.URL_REGEXP)]],
      company_name: [''],
      mobile_number: ['', [Validators.pattern(COMMON_REGEXP.MOBILE_REGEXP), Validators.minLength(9), Validators.maxLength(12)]],
      message: ['', [Validators.minLength(1), Validators.maxLength(256)]],
      logo: [''],
    });
  }

  onVendorLoginSubmit(form: FormGroup) {
    if (form.valid) {
      const params = form.value;
      const formData: any = new FormData();
      formData.append('email', params.email);
      formData.append('website', params.website);
      formData.append('company_name', params.company_name);
      formData.append('mobile_number', params.mobile_number);
      formData.append('message', params.message);
      formData.append('userIP', this.userIP);
      if (params.logo) {
        formData.append('logo', params.logo);
      }

      this._publicService.partnerFormApi(formData).subscribe((res) => {
        this.loginForm.reset();
        this._sharedService.onShowMessageBar(res.message);
      });
    }
  }

  getIp(){
    const self = this;
    this._publicService.getClientIP().subscribe((res) => {
      self.setuserIP(res.ip);
    });
  }

  setuserIP(ip){
    this.userIP = ip;
  }

  onBrowseIdProof(id) {
    document.getElementById(id).click();
  }

  onUploadIdProof(event) {
    if (event.target.files && event.target.files.length) {
      this.filename = event.target.files && event.target.files[0] ? event.target.files[0].name : '';
      if (this.checkExtension(this.filename.split('.')[1])) {
        this.loginForm.patchValue({
          logo: event.target.files[0],
        });
      }else{
        this.fileErrorMessage = "Please upload file of valid format";
      }
    }
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  get formControls() {
    return this.loginForm.controls;
  }
}
