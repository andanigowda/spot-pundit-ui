export class UrlContant {
  // public routes
  public static HOME_URL = '';
  public static ABOUT_US_URL = 'about-us';
  public static BLOG_URL = 'blog';
  public static BLOG_DETAILS_URL = 'blog/details';
  public static CONTACT_US_URL = 'contact-us';
  public static TEMPLE_URL = 'temples';
  public static TEMPLE_PROFILE_URL = 'temple/profile';
  public static TEMPLE_DETAILS_URL = 'temple-search/details';
  public static FLORIST_SEARCH_DETAILS_URL = 'florists-search/details';
  public static CREMATORIUM_SEARCH_DETAILS_URL = 'crematoriums-search/details';
  public static PRICING_URL = 'pricing';
  public static PUJA_URL = 'pujas';
  public static PUJA_DETAILS_URL = 'puja/details';
  public static PUJA_LIST = 'puja/list';
  public static PANDIT_URL = 'samskara';
  public static PANDIT_PROFILE_URL = 'pandit/profile';
  public static SEARCH_RESULT_URL = 'search';
  public static CALENDER_URL = 'calendar';
  public static PRAYERS_URL = 'prayers';
  public static PRAYERS_DETAILS_URL = 'prayer/details';
  public static GODS_URL = 'gods';
  public static GODS_DETAILS_URL = 'god/details';
  public static PUJA_RECEPES_URL = 'puja-recipes';
  public static PUJA_RECEPES_DETAILS_URL = 'puja-recipes/details';
  public static PUJA_SAMAGRI_URL = 'puja-samagri';
  public static PUJA_SAMAGRI_DETAILS_URL = 'puja-samagri/details';
  public static UPCOMING_EVENTS_URL = 'upcoming-events';
  public static FAQS_URL = 'faqs';
  public static SITEMAP_URL = 'sitemap';
  public static HINDI_SCRIPTURES_URL = 'hindu-scriptures';
  public static ENDORSER_URL = 'endorsers';
  public static HINDU_GROSSARY_URL = 'hindu-glossary';
  public static TESTIMONIALS_URL = 'testimonials';
  public static TESTIMONIAL_DETAILS_URL = 'testimonial/details';
  public static WHY_US_URL = 'why-join-us';
  public static PARTNER_COLLABRATE_URL = 'partner-collaborate';
  public static CAREER_URL = 'career';
  public static PARTNER_LIST_URL = 'partners';
  public static FLORIST_LIST_URL = 'florists';
  public static CREMATORIUM_LIST_URL = 'crematoriums';
  public static FLORIST_DETAILS_URL = 'florists/profile';
  public static CREMATORIUM_DETAILS_URL = 'crematoriums/profile';
  public static SAMSKARA_URL = 'samskara';
  public static YOGA_URL = 'yoga';
  public static VASTU_SHASTRA_URL = 'vastu-shastra';
  public static TARROT_CARD_READING_URL = 'tarot-card-reading';
  public static PALMISTYR_URL = 'palmistry';
  public static MEDITATION_URL = 'meditation';
  public static NUMEROLOGY_URL = 'numerology';
  public static ASTROLOGY_URL = 'astrology';
  public static SHEMAROO_STORE_URL = 'shemaroo-store';
  public static ANNOUNCEMENT_URL = 'announcement';
  public static ELIGIBILITY_URL = 'eligibility';
  public static APPLICATION_URL = 'application';
  public static PANCHANG = 'panchang';
  public static APPLICATION_FORM_URL = 'application-form';
  public static CUSTOMER_DETAILS_URL = 'getdetails';
  
  // pandit dashboard module routes
  public static PANDIT_DASHBOARD_MODULE = 'pandit';
  public static AUTH_MODULE = 'auth';

  // Auth module route
  public static PANDIT_LOGIN_URL = 'pandit/login';
  public static PANDIT_LOGIN = `${UrlContant.AUTH_MODULE}/${UrlContant.PANDIT_LOGIN_URL}`;

  public static PANDIT_SIGNUP_URL = 'pandit/signup';
  public static PANDIT_SIGNUP = `${UrlContant.AUTH_MODULE}/${UrlContant.PANDIT_SIGNUP_URL}`;

  public static PANDIT_SET_PASSWORD_URL = 'pandit/reset-password';
  public static PANDIT_SET_PASSWORD = `${UrlContant.AUTH_MODULE}/${UrlContant.PANDIT_SET_PASSWORD_URL}`;

  public static PANDIT_FORGOT_EMAIL_URL = 'pandit/forgot';
  public static PANDIT_FORGOT_EMAIL = `${UrlContant.AUTH_MODULE}/${UrlContant.PANDIT_FORGOT_EMAIL_URL}`;

  public static USER_LOGIN_URL = 'user/login';
  public static USER_LOGIN = `${UrlContant.AUTH_MODULE}/${UrlContant.USER_LOGIN_URL}`;

  public static USER_SIGNUP_URL = 'user/signup';
  public static USER_SIGNUP = `${UrlContant.AUTH_MODULE}/${UrlContant.USER_SIGNUP_URL}`;

  public static USER_FORGOT_EMAIL_URL = 'user/forgot';
  public static USER_FORGOT_EMAIL = `${UrlContant.AUTH_MODULE}/${UrlContant.USER_FORGOT_EMAIL_URL}`;

  public static USER_SET_PASSWORD_URL = 'user/reset-password';
  public static USER_SET_PASSWORD = `${UrlContant.AUTH_MODULE}/${UrlContant.USER_SET_PASSWORD_URL}`;

  public static FLORIST_LOGIN_URL = 'florist/login';
  public static FLORIST_LOGIN = `${UrlContant.AUTH_MODULE}/${UrlContant.FLORIST_LOGIN_URL}`;

  public static FLORIST_SIGNUP_URL = 'florist/signup';
  public static FLORIST_SIGNUP = `${UrlContant.AUTH_MODULE}/${UrlContant.FLORIST_SIGNUP_URL}`;

  public static FLORIST_FORGOT_EMAIL_URL = 'florist/forgot-email';
  public static FLORIST_FORGOT_EMAIL = `${UrlContant.AUTH_MODULE}/${UrlContant.FLORIST_FORGOT_EMAIL_URL}`;

  public static CREMATORIUM_LOGIN_URL = 'crematorium/login';
  public static CREMATORIUM_LOGIN = `${UrlContant.AUTH_MODULE}/${UrlContant.CREMATORIUM_LOGIN_URL}`;

  public static CREMATORIUM_SIGNUP_URL = 'crematorium/signup';
  public static CREMATORIUM_SIGNUP = `${UrlContant.AUTH_MODULE}/${UrlContant.CREMATORIUM_SIGNUP_URL}`;

  public static CREMATORIUM_FORGOT_EMAIL_URL = 'crematorium/forgot-email';
  public static CREMATORIUM_FORGOT_EMAIL = `${UrlContant.AUTH_MODULE}/${UrlContant.CREMATORIUM_FORGOT_EMAIL_URL}`;

  public static TEMPLE_LOGIN_URL = 'temple/login';
  public static TEMPLE_LOGIN = `${UrlContant.AUTH_MODULE}/${UrlContant.TEMPLE_LOGIN_URL}`;

  public static TEMPLE_SIGNUP_URL = 'temple/signup';
  public static TEMPLE_SIGNUP = `${UrlContant.AUTH_MODULE}/${UrlContant.TEMPLE_SIGNUP_URL}`;

  public static TEMPLE_FORGOT_EMAIL_URL = 'temple/forgot-email';
  public static TEMPLE_FORGOT_EMAIL = `${UrlContant.AUTH_MODULE}/${UrlContant.TEMPLE_FORGOT_EMAIL_URL}`;

  // Private module route
  public static DASHBOARD_URL = 'dashboard';
  public static DASHBOARD = `${UrlContant.PANDIT_DASHBOARD_MODULE}/${UrlContant.DASHBOARD_URL}`;

  public static CHANGE_PASSOWRD_URL = 'change-password';
  public static CHANGE_PASSOWRD = `${UrlContant.PANDIT_DASHBOARD_MODULE}/${UrlContant.CHANGE_PASSOWRD_URL}`;

  public static RATINGS_URL = 'ratings';
  public static RATINGS = `${UrlContant.PANDIT_DASHBOARD_MODULE}/${UrlContant.RATINGS_URL}`;

  public static SHORTLISTED_URL = 'shortlisted';
  public static SHORTLISTED = `${UrlContant.PANDIT_DASHBOARD_MODULE}/${UrlContant.SHORTLISTED_URL}`;

  public static TEMPLE_LIST_URL = 'temple';
  public static TEMPLE_LIST = `${UrlContant.PANDIT_DASHBOARD_MODULE}/${UrlContant.TEMPLE_LIST_URL}`;

  public static TEMPLE_VIEW_URL = 'temple/view';
  public static TEMPLE_VIEW = `${UrlContant.PANDIT_DASHBOARD_MODULE}/${UrlContant.TEMPLE_VIEW_URL}`;

  public static ADD_TEMPLE_URL = 'temple/add';
  public static ADD_TEMPLE = `${UrlContant.PANDIT_DASHBOARD_MODULE}/${UrlContant.ADD_TEMPLE_URL}`;

  public static EDIT_TEMPLE_URL = 'temple/edit';
  public static EDIT_TEMPLE = `${UrlContant.PANDIT_DASHBOARD_MODULE}/${UrlContant.EDIT_TEMPLE_URL}`;

  public static TEMPLE_PANDIT_VIEW_URL = 'temple/pandit/view';
  public static TEMPLE_PANDIT_VIEW = `${UrlContant.PANDIT_DASHBOARD_MODULE}/${UrlContant.TEMPLE_PANDIT_VIEW_URL}`;

  public static ADD_TEMPLE_PANDIT_URL = 'temple/pandit/add';
  public static ADD_TEMPLE_PANDIT = `${UrlContant.PANDIT_DASHBOARD_MODULE}/${UrlContant.ADD_TEMPLE_PANDIT_URL}`;

  public static EDIT_TEMPLE_PANDIT_URL = 'temple/pandit/edit';
  public static EDIT_TEMPLE_PANDIT = `${UrlContant.PANDIT_DASHBOARD_MODULE}/${UrlContant.EDIT_TEMPLE_PANDIT_URL}`;

  public static PANDIT_LIST_URL = 'pandit';
  public static PANDIT_LIST = `${UrlContant.PANDIT_DASHBOARD_MODULE}/${UrlContant.PANDIT_LIST_URL}`;

  public static PANDIT_VIEW_URL = 'pandit/view';
  public static PANDIT_VIEW = `${UrlContant.PANDIT_DASHBOARD_MODULE}/${UrlContant.PANDIT_VIEW_URL}`;

  public static ADD_PANDIT_URL = 'pandit/add';
  public static ADD_PANDIT = `${UrlContant.PANDIT_DASHBOARD_MODULE}/${UrlContant.ADD_PANDIT_URL}`;

  public static EDIT_PANDIT_URL = 'pandit/edit';
  public static EDIT_PANDIT = `${UrlContant.PANDIT_DASHBOARD_MODULE}/${UrlContant.EDIT_PANDIT_URL}`;

  public static CHAT_URL = 'chat';
  public static CHAT = `${UrlContant.PANDIT_DASHBOARD_MODULE}/${UrlContant.CHAT_URL}`;

  public static PANDIT_SUBSCRIPTION_URL = 'subscription';
  public static PANDIT_SUBSCRIPTION = `${UrlContant.PANDIT_DASHBOARD_MODULE}/${UrlContant.PANDIT_SUBSCRIPTION_URL}`;

  // User module routes
  public static USERS_MODULE = 'users';

  public static USER_DASHBOARD_URL = 'dashboard';
  public static USER_DASHBOARD = `${UrlContant.USERS_MODULE}/${UrlContant.USER_DASHBOARD_URL}`;

  public static USER_PROFILE_URL = 'profile';
  public static USER_PROFILE = `${UrlContant.USERS_MODULE}/${UrlContant.USER_PROFILE_URL}`;

  public static USER_CHANGE_PASSOWRD_URL = 'change-password';
  public static USER_CHANGE_PASSOWRD = `${UrlContant.USERS_MODULE}/${UrlContant.USER_CHANGE_PASSOWRD_URL}`;

  public static USER_INQUIRY_URL = 'inquiry';
  public static USER_INQUIRY = `${UrlContant.USERS_MODULE}/${UrlContant.USER_INQUIRY_URL}`;

  public static USER_RATINGS_URL = 'ratings';
  public static USER_RATINGS = `${UrlContant.USERS_MODULE}/${UrlContant.USER_RATINGS_URL}`;

  public static USER_SHORTLISTED_URL = 'shortlisted';
  public static USER_SHORTLISTED = `${UrlContant.USERS_MODULE}/${UrlContant.USER_SHORTLISTED_URL}`;

  public static USER_SHORTLISTED_DETAILS_URL = 'shortlisted/details';
  public static USER_SHORTLISTED_DETAILS = `${UrlContant.USERS_MODULE}/${UrlContant.USER_SHORTLISTED_DETAILS_URL}`;

  // Private Temple module routes
  public static TEMPLE_MODULE = 'temple';
  public static TEMPLE_DASHBOARD_URL = 'dashboard';
  public static TEMPLE_DASHBOARD = `${UrlContant.TEMPLE_MODULE}/${UrlContant.TEMPLE_DASHBOARD_URL}`;

  public static TEMPLE_PROFILE_INFO_URL = 'profile';
  public static TEMPLE_PROFILE_INFO = `${UrlContant.TEMPLE_MODULE}/${UrlContant.TEMPLE_PROFILE_INFO_URL}`;

  public static TEMPLE_PANDITS_DETAILS_URL = 'pandits';
  public static TEMPLE_PANDITS_DETAILS = `${UrlContant.TEMPLE_MODULE}/${UrlContant.TEMPLE_PANDITS_DETAILS_URL}`;

  public static TEMPLE_PANDITS_ADD_URL = 'pandits/add';
  public static TEMPLE_PANDITS_ADD = `${UrlContant.TEMPLE_MODULE}/${UrlContant.TEMPLE_PANDITS_ADD_URL}`;

  public static TEMPLE_PANDITS_EDIT_URL = 'pandits/edit';
  public static TEMPLE_PANDITS_EDIT = `${UrlContant.TEMPLE_MODULE}/${UrlContant.TEMPLE_PANDITS_EDIT_URL}`;

  public static TEMPLE_PANDITS_VIEW_URL = 'pandits/view';
  public static TEMPLE_PANDITS_VIEW = `${UrlContant.TEMPLE_MODULE}/${UrlContant.TEMPLE_PANDITS_VIEW_URL}`;

  public static TEMPLE_CHANGE_PASSOWRD_URL = 'change-password';
  public static TEMPLE_CHANGE_PASSOWRD = `${UrlContant.TEMPLE_MODULE}/${UrlContant.TEMPLE_CHANGE_PASSOWRD_URL}`;

  public static TEMPLE_SUBSCRIPTION_URL = 'subscription';
  public static TEMPLE_SUBSCRIPTION = `${UrlContant.TEMPLE_MODULE}/${UrlContant.TEMPLE_SUBSCRIPTION_URL}`;

  // Private florist module routes
  public static FLORIST_MODULE = 'florist';
  public static FLORIST_DASHBOARD_URL = 'dashboard';
  public static FLORIST_DASHBOARD = `${UrlContant.FLORIST_MODULE}/${UrlContant.FLORIST_DASHBOARD_URL}`;

  public static FLORIST_PROFILE_INFO_URL = 'profile';
  public static FLORIST_PROFILE_INFO = `${UrlContant.FLORIST_MODULE}/${UrlContant.FLORIST_PROFILE_INFO_URL}`;

  public static FLORIST_CHANGE_PASSOWRD_URL = 'change-password';
  public static FLORIST_CHANGE_PASSOWRD = `${UrlContant.FLORIST_MODULE}/${UrlContant.FLORIST_CHANGE_PASSOWRD_URL}`;

  public static FLORIST_SUBSCRIPTION_URL = 'subscription';
  public static FLORIST_SUBSCRIPTION = `${UrlContant.FLORIST_MODULE}/${UrlContant.FLORIST_SUBSCRIPTION_URL}`;

  // Private crematorium module routes
  public static CREMATORIUM_MODULE = 'crematorium';
  public static CREMATORIUM_DASHBOARD_URL = 'dashboard';
  public static CREMATORIUM_DASHBOARD = `${UrlContant.CREMATORIUM_MODULE}/${UrlContant.CREMATORIUM_DASHBOARD_URL}`;

  public static CREMATORIUM_PROFILE_INFO_URL = 'profile';
  public static CREMATORIUM_PROFILE_INFO = `${UrlContant.CREMATORIUM_MODULE}/${UrlContant.CREMATORIUM_PROFILE_INFO_URL}`;

  public static CREMATORIUM_CHANGE_PASSOWRD_URL = 'change-password';
  public static CREMATORIUM_CHANGE_PASSOWRD = `${UrlContant.CREMATORIUM_MODULE}/${UrlContant.CREMATORIUM_CHANGE_PASSOWRD_URL}`;

  public static CREMATORIUM_SUBSCRIPTION_URL = 'subscription';
  public static CREMATORIUM_SUBSCRIPTION = `${UrlContant.CREMATORIUM_MODULE}/${UrlContant.CREMATORIUM_SUBSCRIPTION_URL}`;
}
