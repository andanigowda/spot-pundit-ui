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
import { CareerService } from '../../services/career.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
  providers: [CareerService]
})

export class CareerComponent extends ValidationsComponent implements OnInit {

  // Form Variables
  careerForm: FormGroup;




  constructor(
    private _fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _sharedService: SharedService,
    private careerService: CareerService
  ) {
    super();
  }

  ngOnInit(): void {
    this.createCareerForm();
  }

  createCareerForm() {
    this.careerForm = this._fb.group({
      first_name: [''],
      last_name: [''],
      email: ['', [Validators.pattern(COMMON_REGEXP.EMAIL_ADDRESS_REGEXP)]],
      phone_number: ['', [Validators.pattern(COMMON_REGEXP.MOBILE_REGEXP)]],
      message: [''],
      resume: ['']
    });
  }

  onCareerLoginSubmit(form) {
    if (form.valid) {
      const params = form.value;
      const formData: any = new FormData();
      formData.append('first_name', params['first_name']);
      formData.append('last_name', params['last_name']);
      formData.append('email', params['email']);
      formData.append('phone_number', params['phone_number']);
      formData.append('message', params['message']);
      formData.append('resume', params['resume']);

      this.careerService.careerFormApi(formData).subscribe(res => {
        this.careerForm.reset();
        this._sharedService.onShowMessageBar(res.message);
      });
    }
  }

  onBrowseIdProof(id) {
    document.getElementById(id).click();
  }

  onUploadIdProof(event) {
    if (event.target.files && event.target.files.length) {
      this.careerForm.patchValue({
        resume: event.target.files[0]
      });
    }
  }

  get formControls() {
    return this.careerForm.controls;
  }

}
