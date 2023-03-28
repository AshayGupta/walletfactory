import { ApiRouter, StatusCode } from "../../../common/enums/enums";
import { Injectable } from "@angular/core";
import { HttpService } from "../../httpService";

 import { ApiUrl } from "../../../common/constants/constants";
import { HttpClient } from "@angular/common/http";
import { CountryCodeReqSerializer, CountryCodeResp } from "../../../dataModels/country-code.model";


const endPoint = ApiRouter.ApiRouter2 + 'lfr/core/getCountryCodes'; 

@Injectable()
export class CountryCodeService extends HttpService<CountryCodeResp> {

  constructor(http: HttpClient) {
    super(
      http,
      ApiUrl.baseUrl,
      endPoint,
      new CountryCodeReqSerializer()
    );
  }

  
  countryCodes(cbResp: (res:CountryCodeResp) => void, cbErr?: (err: boolean) => void) {
    super.read().subscribe((resp:CountryCodeResp) => {
      console.log('countryCodes response -> ', resp);
      cbResp(resp);  
    },
    error => {
      console.log('countryCodes error -> ',  error);
      if (error.status == StatusCode.Status403) {
        cbErr(true);
      }
    })
  }


 


}
