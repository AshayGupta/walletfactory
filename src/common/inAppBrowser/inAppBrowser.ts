import { Injectable } from "@angular/core";
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx'; 

@Injectable()
export class InAppbrowserClass {
 
      options : InAppBrowserOptions = {
        location : 'yes',//Or 'no' 
        hidden : 'no', //Or  'yes'
        clearcache : 'yes',
        clearsessioncache : 'yes',
        zoom : 'yes',//Android only ,shows browser zoom controls 
        hardwareback : 'yes',
        mediaPlaybackRequiresUserAction : 'no',
        shouldPauseOnSuspend : 'no', //Android only 
        closebuttoncaption : 'Close', //iOS only
        disallowoverscroll : 'no', //iOS only 
        toolbar : 'yes', //iOS only 
        enableViewportScale : 'no', //iOS only 
        allowInlineMediaPlayback : 'no',//iOS only 
        presentationstyle : 'pagesheet',//iOS only 
        fullscreen : 'yes',//Windows only    
      };
     constructor(
        public _iab: InAppBrowser
    ) {
    }

       
//     static openWithSystemBrowser(url : string){
//     let target = "_system";
//     this._iab.create(url,target,this.options);
// }
//     static options(url: string, target: string, options: any) {
//         throw new Error("Method not implemented.");
//     }
// static openWithInAppBrowser(url : string){
//     let target = "_blank";
//     this._iab.create(url,target,this.options); 
// }
// static  openWithCordovaBrowser(url : string){
//     let target = "_self";
//     this._iab.create(url,target,this.options);
// } 
}