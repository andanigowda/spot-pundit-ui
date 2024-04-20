import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialImportModule } from './component/material-import/material-import.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { ValidationsComponent } from './component/validations/validations.component';
import { NgSelectModule } from '@ng-select/ng-select';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  declarations: [ValidationsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialImportModule,
    QuillModule.forRoot(),
    NgxStarRatingModule,
    PasswordStrengthMeterModule,
    NgxMatSelectSearchModule,
    NgxMaterialTimepickerModule,
    SwiperModule,
    NgSelectModule
  ],
  exports: [
    MaterialImportModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule,
    NgxStarRatingModule,
    PasswordStrengthMeterModule,
    NgxMaterialTimepickerModule,
    NgxMatSelectSearchModule,
    ValidationsComponent,
    SwiperModule,
    NgSelectModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class SharedModule {}
