import { Component, OnInit } from '@angular/core';
import { Configuration, MxPlatformApi } from 'mx-platform-node';
import { HttpClient,HttpHeaders } from '@angular/common/http';
 //  import { Pipe, PipeTransform } from '@angular/core';
 import { ActivatedRoute, Router } from '@angular/router';
//  import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";  


import { DomSanitizer ,SafeResourceUrl} from "@angular/platform-browser"; 
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-mx-account',
  templateUrl: './mx-account.page.html',
  styleUrls: ['./mx-account.page.scss'],
})
export class MxAccountPage implements OnInit {
  public safeSrc: SafeResourceUrl;   
  widget_url:any="";
  constructor(public http: HttpClient,private sanitizer: DomSanitizer,
    private router: Router,public activatedRoute: ActivatedRoute,
    // private inAppBrowser: InAppBrowser,
    public platform: Platform) { 

      // const options: InAppBrowserOptions = {
      //   toolbar: 'no',
      //   location: 'no',
      //   zoom: 'no'
      // } 

      // this.platform.ready().then( () => { 
      //   const browser = this.inAppBrowser.create(this.widget_url, '_self', options);  
      // })

         

    } 

  ngOnInit() {     
  this.widget_url=this.activatedRoute.snapshot.params['widgetUrl']; 
  // this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.widget_url);  
  }

  

}
