export const COMMON_REGEXP = {
    NUMERIC_REGEXP: '^[0-9]*$',
    MOBILE_REGEXP: '^[+-0-9]{0,1}[0-9-]*$',
    NAME_ALPHA_NUMERIC_REGEXP: '^[A-Za-z0-9-._,\'&\u00C0-\u00FF][A-Za-z0-9-._,\'& \u00C0-\u00FF][^\u00D7\u00F7\u00C6\u00DE\u00DF\u00E6\u00F0]*$',
    EMAIL_ADDRESS_REGEXP: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-+0-9]+\.)+[a-zA-Z]{2,}))$/,
    URL_REGEXP: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
}
