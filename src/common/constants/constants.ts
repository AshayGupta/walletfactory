export class RegexPattern {
  static readonly onlyContainLetters = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  static readonly email = /[A-Za-z0-9._%+-]{1,}@[a-zA-Z]{1,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{1,}[.]{1}[a-zA-Z]{2,})/;
  static readonly onlyContainNumbers = /^[0-9]*$/;
  static readonly numStartWithZero = /^0[0-9]*$/;
  static readonly password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
}

export class ImgsPath {
  static readonly britamLogo = 'assets/imgs/Britam_logo.png';
}

const ApiConfig = {
  version: '1.0/',
};
   
export class ApiUrl {
  static readonly vishalUrl = 'http://localhost:9090/gates/';  // Local Vishal
  static readonly devUrl = 'http://192.168.1.58:9090/gates/';  // DEV URL
  static readonly qaUrl = 'http://10.10.3.184:9090/gates/'; // QA URL  
  static readonly uatUrl = 'https://mobileuat.britam.com/gates/'; // UAT URL   
  static readonly prodUrl = 'https://mobilelive.britam.com/gates/'; // LIVE URL
               
  static domainUrl = ApiUrl.prodUrl; // set domain url            
 
  static readonly baseUrl: string = ApiUrl.domainUrl + ApiConfig.version; 
  static readonly baseUrlBOImg = ApiUrl.domainUrl;
  static readonly profileImgUrl = ApiUrl.domainUrl == ApiUrl.qaUrl ? 'http://customerconnectqa.britam.com' :
                                  ApiUrl.domainUrl == ApiUrl.uatUrl ? 'http://customerconnectuat.britam.com' :
                                  ApiUrl.domainUrl == ApiUrl.prodUrl ? 'https://customerconnect.britam.com' : '';
}

export const Environment = {
  prod: ApiUrl.baseUrl.includes(ApiUrl.prodUrl) ? true : false 
}