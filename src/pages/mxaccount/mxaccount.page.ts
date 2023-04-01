import { Component, OnInit } from '@angular/core';
import { Configuration, MxPlatformApi } from 'mx-platform-node';
import { HttpClient,HttpHeaders } from '@angular/common/http';
 //  import { Pipe, PipeTransform } from '@angular/core';

import { DomSanitizer ,SafeResourceUrl} from "@angular/platform-browser"; 
 
@Component({
  selector: 'app-mxaccount',
  templateUrl: './mxaccount.page.html',
  styleUrls: ['./mxaccount.page.scss'],
})
export class MxaccountPage implements OnInit {
  API_KEY='b4525241e0499f529bb7b786aeed9bb25c2bfe56';
  CLIENT_ID='e01697bb-12d4-4c60-ab62-195d879d0111';
  DEVELOPMENT_ENVIRONMENT="https://int-api.mx.com";
  configuration:any;
  public safeSrc: SafeResourceUrl;   
  // Configure environment. https://int-api.mx.com for development, https://api.mx.com for production
   widget_url:any="";
  constructor( public http: HttpClient,private sanitizer: DomSanitizer, ) { }

  async ngOnInit() {

    this.configuration = new Configuration({
      // Configure with your Client ID/API Key from https://dashboard.mx.com
      username: this.CLIENT_ID,
      password: this.API_KEY,
    
      basePath: this.DEVELOPMENT_ENVIRONMENT,    
      baseOptions: {
        headers: {
          Accept: 'application/vnd.mx.api.v1+json'
        }
      }
    })


 const client = new MxPlatformApi(this.configuration);
const requestBody = {
  user: {
    metadata: 'Creating a mx user!',
      //  user_guid: 'USR-123',
      // session_guid: 'ANS-123'
      // relevant data for the given type
   }
};

const response = await client.createUser(requestBody);

const userGuid:any=response.data.user.guid;  

console.log(userGuid);

 const requestBodyData = {
  widget_url: {
    current_member_guid: userGuid,
    // mode: 'verification',
    widget_type: 'connect_widget',
    include_identity: true, 
    is_mobile_webview: true,
    ui_message_version: 4,
    // ui_message_webview_url_scheme: '{app_scheme}',
    include_transactions: true,

    client_redirect_url: 'https://mx.com',
    color_scheme: 'light',
    current_institution_code: 'chase',
    current_institution_guid: 'INS-f1a3285d-e855-b61f-6aa7-8ae575c0e0e9',
     disable_background_agg: false,
    disable_institution_search: false,
     mode: 'aggregation',
    oauth_referral_source: 'BROWSER',
     update_credentials: false,
 

   }
};

// const acceptLanguage = 'en-US';

// const responseData = await client.requestWidgetURL(userGuid, requestBodyData,acceptLanguage);
 
// console.log(response.data);

//  this.widget_url= responseData.data.widget_url.url;
 
 
  //  this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(responseData.data.widget_url.url);
 

//  const widget = await new widgetSdk.ConnectWidget({
//   url: {this.widget_url},
//   container: "#connect-widget"
// })
//  $('head').append('<script async src="assets/js/search.js"></script>');

/////////////////////////////////////////////////////

// this.http.post('/api/get_mxconnect_widget_url', async function (request, response) {
//   try {
//     let userGuid = request.body.user_guid
//     if (userGuid == null) {
//       const createUserRequestBody = {
//         user: {
//           id: request.body.user_id ? request.body.user_id : null
//         }
//       }
//       const createUserResponse = await client.createUser(createUserRequestBody)
//       userGuid = createUserResponse.data.user.guid
//     }

//     const widgetRequestBody = {
//       widget_url: {
//         include_transactions: true,
//         is_mobile_webview: false,
//         mode: 'verification',
//         ui_message_version: 4,
//         widget_type: 'connect_widget'
//       }
//     }

//     const widgetResponse = await client.requestWidgetURL(userGuid, widgetRequestBody)
//     response.json(widgetResponse.data)
//   } catch (e) {
//     this.logAndReturnApiError("requestWidgetURL", e, response)
//   }
// })

  

  }

    logAndReturnApiError(method, e, response) {
    if (!e.response) {
      console.log("Error when calling MxPlatformApi->" + method + ": " + e)
      response.status("500").send({ 'errorMessage': e })
      return
    }
    console.log("Error when calling MxPlatformApi->" + method + ": HTTP " + e.response.status + " " + e.response.statusText)
    console.log(e.response.data)
    response.status(e.response.status).send({ 'errorMessage': e.response.data })
  }

}
