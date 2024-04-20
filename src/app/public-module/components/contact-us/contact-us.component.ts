import { SharedService } from 'src/app/public-module/services/shared.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ContactUsService } from '../../services/contact-us.service';
import { COMMON_REGEXP } from 'src/app/constants/validations';
import { ValidationsComponent } from 'src/app/shared-module/component/validations/validations.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  providers: [ContactUsService]
})

export class ContactUsComponent extends ValidationsComponent implements OnInit {

  contactsForm: FormGroup;

  constructor(private fb: FormBuilder, private contactUsService: ContactUsService, private _sharedService: SharedService) {
    super();
  }

  ngOnInit(): void {
    this.contactsForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      email: ['', [Validators.pattern(COMMON_REGEXP.EMAIL_ADDRESS_REGEXP)]],
      phone_number: ['', [Validators.pattern(COMMON_REGEXP.MOBILE_REGEXP), Validators.minLength(9), Validators.maxLength(14)]],
      query: [''],
    });
  }

  onSubmitContactsForm(form) {
    if (form.valid) {
      const params = form.value;
      const formData: any = new FormData();
      formData.append('first_name', params['first_name']);
      formData.append('last_name', params['last_name']);
      formData.append('email', params['email']);
      formData.append('phone_number', params['phone_number']);
      formData.append('query', params['query']);

      this.contactUsService.contactUsApi(formData).subscribe(res => {
        this.contactsForm.reset();
        this._sharedService.onShowMessageBar(res.message);
      })
    }
  }

  get formControls() {
    return this.contactsForm.controls;
  }
}
