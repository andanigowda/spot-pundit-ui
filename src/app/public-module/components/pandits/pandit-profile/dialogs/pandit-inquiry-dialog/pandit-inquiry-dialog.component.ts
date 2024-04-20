import { SharedService } from './../../../../../services/shared.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { PanditService } from 'src/app/public-module/services/pandit-service/pandit.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PublicService } from 'src/app/public-module/services/public-service.service';

@Component({
  selector: 'app-pandit-inquiry-dialog',
  templateUrl: './pandit-inquiry-dialog.component.html',
  styleUrls: ['./pandit-inquiry-dialog.component.scss'],
  providers: [PanditService],
})
export class PanditInquiryDialogComponent implements OnInit {
  panditInquiryForm: FormGroup;
  languageList: any[] = [];

  minDate = new Date();
  userIP: any = "";

  constructor(
    private fb: FormBuilder,
    private panditService: PanditService,
    public dialogRef: MatDialogRef<PanditInquiryDialogComponent>,
    private sharedService: SharedService,
    private _publicService: PublicService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.getLanguageList();
    this.createPanditInquiryForm();
    this.getIp();
  }

  getLanguageList() {
    this.panditService.getLanguageApi().subscribe(res => {
      this.languageList = res;
    });
  }

  createPanditInquiryForm() {
    this.panditInquiryForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      phone_number: ['', [Validators.pattern('^[0-9]*$')]],
      email_address: ['', [Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-+0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      occasion: [''],
      address: [''],
      language_id: [''],
     // time_to_reach_out: [''],
      message: [''],
      event_time: [''],
      event_date: [''],
      pandit_id: [this.data.id],
    });
  }

  onSubmitPanditInquiryForm(form: FormGroup) {
    if (form.valid) {
      const params = form.value;
      const formData: any = new FormData();
      formData.append('first_name', params['first_name']);
      formData.append('last_name', params['last_name']);
      formData.append('phone_number', params['phone_number']);
      formData.append('email_address', params['email_address']);
      formData.append('language_id', params['language_id']);
      formData.append('pandit_id', params['pandit_id']);
      formData.append('userIP', this.userIP);
      this.panditService.panditInquiryApi(formData).subscribe((res) => {
        this.dialogRef.close();
        this.sharedService.onShowMessageBar(res.message);
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

  get controls() {
    return this.panditInquiryForm.controls;
  }

  isRequiredField = formControlName => {
    return formControlName.touched && formControlName.hasError('required');
  };

  isValidField = formControlName => {
    return formControlName.touched && formControlName.hasError('pattern');
  };

}
