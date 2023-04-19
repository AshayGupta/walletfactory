import { Component, OnInit } from '@angular/core';
import { Configuration, MxPlatformApi } from 'mx-platform-node';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';
import {
  InAppBrowser,
  InAppBrowserOptions,
} from '@ionic-native/in-app-browser/ngx';
import { ToastService } from './../../providers/plugin-services/toast.service';
import { LoaderService } from './../../providers/plugin-services/loader.service';
import { ProfileService } from './../../providers/services/main-module-services/profile.service';
import { Profile } from '../../models/profile.model';
import {  MxAccount, MXBankList } from '../../models/mxBank.model';


@Component({
  selector: 'app-mxaccount',
  templateUrl: './mxaccount.page.html',
  styleUrls: ['./mxaccount.page.scss'],
})
export class MxaccountPage implements OnInit {
  API_KEY = 'b4525241e0499f529bb7b786aeed9bb25c2bfe56';
  CLIENT_ID = 'e01697bb-12d4-4c60-ab62-195d879d0111';
  DEVELOPMENT_ENVIRONMENT = 'https://int-api.mx.com';
  configuration: any;
  myWindow = window as any;
  profile: Profile;

  safeURL: any;
  // Configure environment. https://int-api.mx.com for development, https://api.mx.com for production
  widget_url: any = '';
  constructor(
    public http: HttpClient,
    private dom: DomSanitizer,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private _iab: InAppBrowser,
    public platform: Platform,
    private loader: LoaderService,
    private profileService: ProfileService,
    private toastService: ToastService
  ) {
    this.widget_url = this.activatedRoute.snapshot.params['widgetUrl'];
    this.safeURL = this.dom.bypassSecurityTrustResourceUrl(this.widget_url);
  }

  ngOnInit(): void {
    this.connectMXWIdget();
  }

  connectMXWIdget() {
    let tempRouter = this.router;
    let global = window as any;
    global.addEventListener('message', function (event) {
      try {
        const data = JSON.parse(event.data);
        if (data.moneyDesktop) {
          console.log('versions null -> 3', data);
        }
      } catch (error) {
        /**
         * Versions 4 and on no longer JSON encode the data attribute. It should
         * be immediately accessible. If there is a data.mx attribute that is
         * `true` then this is a version 4 message at this point.
         */
        if (event.data.mx) {
          console.log('version 4 message data', event.data);
          console.log('hello type', event.data.type);
          console.log('metadata', event.data.metadata);
          if (event.data.type === 'mx/connect/memberConnected') {
            localStorage.setItem(
              'member_guid',
              event.data.metadata.member_guid
            );
            // tempRouter.navigate(['/tabs/tab-home']);
            tempRouter.navigate(['/payment-method']);

            
          }
        }
      }
    });
  }

  /////////////////////////////////////////////////////////////////////////////

  // this.myWindow.addEventListener('message', function (event) {
  //   try {
  //     /**
  //      * Versions null -> 3. These versions are deprecated. They JSON encode
  //      * the `data` attribute so you must wrap in this in a try catch to try
  //      * to get the data.
  //      */
  //     const data = JSON.parse(event.data);
  //     console.log('hello vishal');
  //     if (data.moneyDesktop) {
  //       console.log('versions null -> 3', data);

  //       if(!!data.oauth_window_uri) {
  //         let guid=data.guid;
  //         let oauth_window_uri=data.oauth_window_uri;

  //         console.log('guid',guid);
  //         console.log('oauth_window_uri',oauth_window_uri);
  //       }

  //     }
  //   } catch (error) {
  //     /**
  //      * Versions 4 and on no longer JSON encode the data attribute. It should
  //      * be immediately accessible. If there is a data.mx attribute that is
  //      * `true` then this is a version 4 message at this point.
  //      */
  //     if (event.data.mx) {
  //       console.log('version 4 message data', event.data);
  //       // console.log('version 4 message metadata', event.data.metadata);
  //       console.log('hello type', event.data.type);

  //       if(event.data.type==='mx/connect/memberConnected'){
  //           //  this.location.href='http://localhost:8100/tabs/tab-home';
  //            this.router.navigate(['http://localhost:8100/tab/tab-home']);

  //        }

  //     }
  //   }
  // });

  // window.addEventListener('message', function (event) {
  //   try {
  //     /**
  //      * Versions null -> 3. These versions are deprecated. They JSON encode
  //      * the `data` attribute so you must wrap in this in a try catch to try
  //      * to get the data.
  //      */
  //     const data = JSON.parse(event.data);
  //     console.log('hello vishal');
  //     if (data.moneyDesktop) {
  //       console.log('versions null -> 3', data);

  //       if(!!data.oauth_window_uri) {
  //         let guid=data.guid;
  //         let oauth_window_uri=data.oauth_window_uri;

  //         console.log('guid',guid);
  //         console.log('oauth_window_uri',oauth_window_uri);
  //       }

  //     }
  //   } catch (error) {
  //     /**
  //      * Versions 4 and on no longer JSON encode the data attribute. It should
  //      * be immediately accessible. If there is a data.mx attribute that is
  //      * `true` then this is a version 4 message at this point.
  //      */
  //     if (event.data.mx) {
  //       console.log('version 4 message data', event.data);
  //       // console.log('version 4 message metadata', event.data.metadata);
  //       console.log('hello type', event.data.type);

  //       if(event.data.type==='mx/connect/memberConnected'){
  //           //  this.location.href='http://localhost:8100/tabs/tab-home';
  //            this.router.navigate(['/tab/tab-home']);

  //        }

  //     }
  //   }
  // });

  //     document.addEventListener('message', function (event) {
  //   try {
  //     /**
  //      * Versions null -> 3. These versions are deprecated. They JSON encode
  //      * the `data` attribute so you must wrap in this in a try catch to try
  //      * to get the data.
  //      */
  //     const data = JSON.parse(event.data);
  //     console.log('hello vishal');
  //     if (data.moneyDesktop) {
  //       console.log('versions null -> 3', data);

  //       if(!!data.oauth_window_uri) {
  //         let guid=data.guid;
  //         let oauth_window_uri=data.oauth_window_uri;

  //         console.log('guid',guid);
  //         console.log('oauth_window_uri',oauth_window_uri);
  //       }

  //     }
  //   } catch (error) {
  //     /**
  //      * Versions 4 and on no longer JSON encode the data attribute. It should
  //      * be immediately accessible. If there is a data.mx attribute that is
  //      * `true` then this is a version 4 message at this point.
  //      */
  //     if (event.data.mx) {
  //       console.log('version 4 message data', event.data);
  //       // console.log('version 4 message metadata', event.data.metadata);
  //       console.log('hello type', event.data.type);

  //       if(event.data.type==='mx/connect/memberConnected'){
  //           //  this.location.href='http://localhost:8100/tabs/tab-home';
  //            this.router.navigate(['/tab/tab-home']);

  //           const options: InAppBrowserOptions = {
  //             location: 'no',
  //             zoom: 'no',
  //             toolbar: 'no',
  //             closebuttoncaption: 'close',
  //             clearcache: 'yes',
  //             // clearsessioncache: 'yes',
  //             // toolbarcolor: "#488aff",
  //             // hideurlbar: "yes",
  //             // closebuttoncolor: "#fff",
  //             // navigationbuttoncolor: "#fff"
  //            };

  //             //  this.platform.ready().then( () => {
  //             //      const linkBankAccount : any = this._iab.create('https://www.google.com', '_blank', options);
  //             // })

  //        }

  //     }
  //   }
  // });

  // onEvent: function (type, payload) {
  //   if (type === "mx/connect/memberConnected") {
  //     myApp.handleSuccessfulConnection(payload)
  //   }
  // },
  // config: { ui_message_version: 4 },

  // this.safeURL = this.sanitizer.bypassSecurityTrustUrl(this.widget_url);

  // this.safeURL=this.dom.bypassSecurityTrustResourceUrl(rediretOauthURL);

  //   const options: InAppBrowserOptions = {
  //   location: 'yes',
  //   zoom: 'no',
  //   toolbar: 'yes',
  //   closebuttoncaption: 'close',
  //   clearcache: 'yes',

  //  };
  //   const linkBankAccount : any = tempiab.create(rediretOauthURL, '_self', options);

  // postRedirectURLData(member_guid,session_guid,user_guid) {
  //   let tempRouter = this.router;
  //   let temploader = this.loader;

  //   let mxRedirect:any=new mxRedirectData();
  //   mxRedirect.member_guid= member_guid;
  //   mxRedirect.session_guid= session_guid;
  //   mxRedirect.user_guid= user_guid;
  //   temploader.showLoading();
  //   this.profileService.mxRedirectData(mxRedirect).subscribe((resp) => {
  //      const mxRedirect: mxRedirectData = resp.data;
  //      temploader.dismissLoader();
  //     // if (!mxRedirect.error) {
  //       tempRouter.navigate(['/tabs/tab-home']);

  //     //  }
  //    });
  // }

  //   ngOnInit() {

  //     this.page = this.sanitizer.bypassSecurityTrustResourceUrl(this.widget_url);

  // }

  // this.configuration = new Configuration({
  //   // Configure with your Client ID/API Key from https://dashboard.mx.com
  //   username: this.CLIENT_ID,
  //   password: this.API_KEY,

  //   basePath: this.DEVELOPMENT_ENVIRONMENT,
  //   baseOptions: {
  //     headers: {
  //       Accept: 'application/vnd.mx.api.v1+json'
  //     }
  //   }
  // })

  //  const client = new MxPlatformApi(this.configuration);
  // const requestBody = {
  //   user: {
  //     metadata: 'Creating a mx user!',
  //       //  user_guid: 'USR-123',
  //       // session_guid: 'ANS-123'
  //       // relevant data for the given type
  //    }
  // };

  // const response = await client.createUser(requestBody);

  // const userGuid:any=response.data.user.guid;

  // console.log(userGuid);

  //  const requestBodyData = {
  //   widget_url: {
  //     current_member_guid: userGuid,
  //     // mode: 'verification',
  //     widget_type: 'connect_widget',
  //     include_identity: true,
  //     is_mobile_webview: true,
  //     ui_message_version: 4,
  //     // ui_message_webview_url_scheme: '{app_scheme}',
  //     include_transactions: true,

  //     client_redirect_url: 'https://mx.com',
  //     color_scheme: 'light',
  //     current_institution_code: 'chase',
  //     current_institution_guid: 'INS-f1a3285d-e855-b61f-6aa7-8ae575c0e0e9',
  //      disable_background_agg: false,
  //     disable_institution_search: false,
  //      mode: 'aggregation',
  //     oauth_referral_source: 'BROWSER',
  //      update_credentials: false,

  //    }
  // };

  // const acceptLanguage = 'en-US';

  // const responseData = await client.requestWidgetURL(userGuid, requestBodyData,acceptLanguage);

  // console.log(response.data);

  //  this.widget_url= responseData.data.widget_url.url;

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

  //   logAndReturnApiError(method, e, response) {
  //   if (!e.response) {
  //     console.log("Error when calling MxPlatformApi->" + method + ": " + e)
  //     response.status("500").send({ 'errorMessage': e })
  //     return
  //   }
  //   console.log("Error when calling MxPlatformApi->" + method + ": HTTP " + e.response.status + " " + e.response.statusText)
  //   console.log(e.response.data)
  //   response.status(e.response.status).send({ 'errorMessage': e.response.data })
  // }
}
