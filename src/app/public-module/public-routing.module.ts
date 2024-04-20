import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlContant } from '../constants/router.contant';
import {
  AboutUsComponent,
  BlogComponent,
  ContactUsComponent,
  TempleComponent,
  TempleProfileComponent,
  PricingComponent,
  PujaComponent,
  SearchResultComponent,
  PrayersChantsComponent,
  GodsComponent,
  PujaRecipesComponent,
  PujaSamagriComponent,
  UpcomingEventsComponent,
  FAQsComponent,
  EndorserComponent,
  GodDetailsComponent,
  HinduGlossaryComponent,
  HinduScripturesComponent,
  PanditProfileComponent,
  PanditsComponent,
  PujaRecipesDetailsComponent,
  PujaSamagriDetailsComponent,
  SitemapComponent,
  CalendarContainerComponent,
  TestimonialsComponent,
  TestimonialDetailsComponent,
  LandingPageComponent,
  WhyUsComponent,
  FloristDetailsComponent,
  FloristListComponent,
  CrematoriumListComponent,
  CrematoriumDetailsComponent,
  CareerComponent,
  PartnerListingComponent,
  SearchCrematoriumDetailsComponent,
  SearchFloristDetailsComponent,
  SearchTempleDetailsComponent,
  PanchangComponent,
} from './components';
import {
  AnnouncementComponent,
  ApplicationComponent,
  EligibilityComponent,
} from './components/announcement';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { AstrologyComponent } from './components/astrology/astrology.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { MeditationComponent } from './components/meditation/meditation.component';
import { NumerologyComponent } from './components/numerology/numerology.component';
import { PalmistryComponent } from './components/palmistry/palmistry.component';
import { SamskaraComponent } from './components/samskara/samskara.component';
import { ShemarooStoreComponent } from './components/shemaroo-store/shemaroo-store.component';
import { TarotCardReadingComponent } from './components/tarot-card-reading/tarot-card-reading.component';
import { VaastuShastraComponent } from './components/vaastu-shastra/vaastu-shastra.component';
import { YogaComponent } from './components/yoga/yoga.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: UrlContant.ABOUT_US_URL,
    component: AboutUsComponent,
  },
  {
    path: UrlContant.BLOG_URL,
    component: BlogComponent,
  },
  {
    path: UrlContant.CONTACT_US_URL,
    component: ContactUsComponent,
  },
  {
    path: UrlContant.TEMPLE_URL,
    component: TempleComponent,
  },
  {
    path: UrlContant.TEMPLE_PROFILE_URL + '/:id',
    component: TempleProfileComponent,
  },
  {
    path: UrlContant.TEMPLE_DETAILS_URL + '/:id',
    component: SearchTempleDetailsComponent,
  },
  {
    path: UrlContant.CREMATORIUM_SEARCH_DETAILS_URL + '/:id',
    component: SearchCrematoriumDetailsComponent,
  },
  {
    path: UrlContant.FLORIST_SEARCH_DETAILS_URL + '/:id',
    component: SearchFloristDetailsComponent,
  },
  {
    path: UrlContant.PRICING_URL,
    component: PricingComponent,
  },
  {
    path: UrlContant.PUJA_URL,
    component: PujaComponent,
  },
  {
    path: UrlContant.PANDIT_URL,
    component: PanditsComponent,
  },
  {
    path: UrlContant.PANDIT_PROFILE_URL + '/:id',
    component: PanditProfileComponent,
  },
  {
    path: UrlContant.SEARCH_RESULT_URL,
    component: SearchResultComponent,
  },
  {
    path: UrlContant.CALENDER_URL,
    component: CalendarContainerComponent,
  },
  {
    path: UrlContant.PRAYERS_URL,
    component: PrayersChantsComponent,
  },
  {
    path: UrlContant.PUJA_SAMAGRI_URL,
    component: PujaSamagriComponent,
  },
  {
    path: UrlContant.PUJA_RECEPES_URL,
    component: PujaRecipesComponent,
  },
  {
    path: UrlContant.GODS_URL,
    component: GodsComponent,
  },
  {
    path: UrlContant.GODS_DETAILS_URL + '/:id',
    component: GodDetailsComponent,
  },
  {
    path: UrlContant.PUJA_RECEPES_DETAILS_URL + '/:id',
    component: PujaRecipesDetailsComponent,
  },
  {
    path: UrlContant.UPCOMING_EVENTS_URL,
    component: UpcomingEventsComponent,
  },
  {
    path: UrlContant.FAQS_URL,
    component: FAQsComponent,
  },
  {
    path: UrlContant.SITEMAP_URL,
    component: SitemapComponent,
  },
  {
    path: UrlContant.HINDI_SCRIPTURES_URL,
    component: HinduScripturesComponent,
  },
  {
    path: UrlContant.ENDORSER_URL,
    component: EndorserComponent,
  },
  {
    path: UrlContant.HINDU_GROSSARY_URL,
    component: HinduGlossaryComponent,
  },
  {
    path: UrlContant.PUJA_SAMAGRI_DETAILS_URL + '/:id',
    component: PujaSamagriDetailsComponent,
  },
  {
    path: UrlContant.BLOG_DETAILS_URL + '/:id',
    component: BlogDetailsComponent,
  },
  {
    path: UrlContant.TESTIMONIALS_URL,
    component: TestimonialsComponent,
  },
  {
    path: UrlContant.TESTIMONIAL_DETAILS_URL + '/:id',
    component: TestimonialDetailsComponent,
  },
  {
    path: UrlContant.WHY_US_URL,
    component: WhyUsComponent,
  },
  {
    path: UrlContant.CAREER_URL,
    component: CareerComponent,
  },
  {
    path: UrlContant.PARTNER_LIST_URL,
    component: PartnerListingComponent,
  },
  {
    path: UrlContant.FLORIST_LIST_URL,
    component: FloristListComponent,
  },
  {
    path: UrlContant.FLORIST_DETAILS_URL + '/:id',
    component: FloristDetailsComponent,
  },
  {
    path: UrlContant.CREMATORIUM_LIST_URL,
    component: CrematoriumListComponent,
  },
  {
    path: UrlContant.CREMATORIUM_DETAILS_URL + '/:id',
    component: CrematoriumDetailsComponent,
  },
  {
    path: UrlContant.CUSTOMER_DETAILS_URL + '/:id',
    component: CustomerDetailsComponent,
  },
  {
    path: UrlContant.SAMSKARA_URL,
    component: SamskaraComponent,
  },
  {
    path: UrlContant.YOGA_URL,
    component: YogaComponent,
  },
  {
    path: UrlContant.VASTU_SHASTRA_URL,
    component: VaastuShastraComponent,
  },
  {
    path: UrlContant.APPLICATION_FORM_URL,
    component: ApplicationFormComponent,
  },
  {
    path: UrlContant.TARROT_CARD_READING_URL,
    component: TarotCardReadingComponent,
  },
  {
    path: UrlContant.PALMISTYR_URL,
    component: PalmistryComponent,
  },
  {
    path: UrlContant.MEDITATION_URL,
    component: MeditationComponent,
  },
  {
    path: UrlContant.NUMEROLOGY_URL,
    component: NumerologyComponent,
  },
  {
    path: UrlContant.ASTROLOGY_URL,
    component: AstrologyComponent,
  },
  {
    path: UrlContant.SHEMAROO_STORE_URL,
    component: ShemarooStoreComponent,
  },
  {
    path: UrlContant.ANNOUNCEMENT_URL,
    component: AnnouncementComponent,
  },
  {
    path: UrlContant.ELIGIBILITY_URL,
    component: EligibilityComponent,
  },
  {
    path: UrlContant.APPLICATION_URL,
    component: ApplicationComponent,
  },
  {
    path: UrlContant.PANCHANG,
    component: PanchangComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PublicRoutingModule {}
