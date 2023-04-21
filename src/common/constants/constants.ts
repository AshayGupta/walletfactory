export class RegexPattern {
  static readonly onlyContainLetters = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  static readonly email = /[A-Za-z0-9._%+-]{1,}@[a-zA-Z]{1,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{1,}[.]{1}[a-zA-Z]{2,})/;
  static readonly onlyContainNumbers = /^[0-9]*$/;
  static readonly numStartWithZero = /^0[0-9]*$/;
  static readonly password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
}

export class ApiUrls {
  static readonly baseUrl = 'http://cashdrop.v3ainfo.com/api';

  static readonly sendOtp = '/send-otp';
  static readonly verifyOtp = '/verify-otp';
  static readonly saveProfile = '/save-profile';
  static readonly mxAccount = '/mx-widget-url';
  static readonly mx_bank_list='/mx-linkbank-callback';
  static readonly addFav='/add-favourite';
  static readonly favList='/show-favourite-list';


  
}