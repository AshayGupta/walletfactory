// import { HttpClientModule } from '@angular/common/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';   
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import { AlertController } from '@ionic/angular';  

import {  ActionSheetController,
  ToastController, Platform, 
  LoadingController, ModalController } from '@ionic/angular';
 
// import { Http} from '@angular/http'; 
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Headers, RequestOptions } from '@angular/http';
// import {Observable} from 'rxjs/Observable'; 
// import { FileChooser } from '@ionic-native/file-chooser';  
//  import { Transfer, TransferObject } from '@ionic-native/file-transfer';    
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';
// import { FilePath } from '@ionic-native/file-path';
// import { Camera, CameraOptions } from '@ionic-native/camera';  
// import { map } from 'rxjs/operator/map';

declare var cordova: any; 
  
const httpOptions = {
  headers: new HttpHeaders(
    { 
      'Content-Type': 'application/json' 
     })    
}  
   
 
@Injectable()

export class WebserviceProvider { 
data:any; 
api:any='https://xfactor.v3ainfo.com';  
apiUrlv1:any = this.api+'/api/';             
loader: any;
accessToken: any; 
filepath: any;
actionSheet: any;
filesize: any;
options:any;
headers;
token:any;

  constructor(
              public http: HttpClient, 
              public loading: LoadingController, 
              public toastCtrl: ToastController,
              public platform: Platform,
              // private alertCtrl: AlertController, 
              public modalCtrl:ModalController,
              // private file: File,               
              public actionSheetCtrl: ActionSheetController,


              // private camera: Camera, private transfer: FileTransfer,
              // public events: Events,
              // private filePath: FilePath,              
              // private fileChooser: FileChooser  
                ) {  
                  console.log('Hello WebserviceProvider Provider');    
                  
            //  this.headers = new HttpHeaders();     
            // this.headers = new Headers();  
            // this.headers.append('Access-Control-Allow-Origin', '*');
            // this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            // this.headers.append('Accept', 'application/json');
            // this.headers.append('content-type', 'application/json');  


            // this.headers.append('Access-Control-Allow-Headers', 'Authorization');    
            // this.headers.append('Content-Type', 'application/json');    
            // this.headers.append('Content-Type','application/x-www-form-urlencoded'); 

            // this.headers.append('Access-Control-Request-Headers', 'Content-Type');   
            // this.headers.append('Access-Control-Allow-Origin' , '*');
            // this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            // this.headers.append('Accept','application/json');  

            //  this.http.setSSLCertMode('nocheck'); 
            //  this.headers.append('*', 'Access-Control-Allow-Origin' , '*');
            //  this.headers.append('*', 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            //  this.headers.append('*', 'Accept','application/json'); 
            //  this.headers.append('*', 'content-type','application/json'); 
            //Important to set the data serializer or the request gets rejected 

            // this.headers.append('Access-Control-Allow-Origin', '*');  

          // if (localStorage.getItem("userDetails")!='' || localStorage.getItem("userDetails")!=undefined || localStorage.getItem("userDetails")!=null){
          //         let localData=  localStorage.getItem("userDetails");
          //          if(localData!=null)
          //           this.token =  JSON.parse(localData).token;    
          //         } else{ 
          //           this.token =  ""; 
          //         } 
          //  } 
             
    }
 
    presentToast(text:any) {
      let toast :any= this.toastCtrl.create({
        message: text,
        duration: 6000,
        position: 'top'
      });
      toast.present();
    }
    
    }

  // protected header() {
  //       let httpHeaders = new HttpHeaders({
  //           'Content-Type': 'application/json',
  //           // 'Authorization': 'Bearer ' + localStorage.getItem(LocalStorageKey.BearerToken)
  //                // 'Authorization': 'Bearer ' + this.token,  

  //       });
  //       let options = {
  //           headers: httpHeaders
  //       };
  //       return options;
  //   }




///////////////////////////////////////////////////////////////////////////////////////////
  // public login_user_get(bodystring) { 
   
  // this.http.post(this.apiUrlv1+'user-login', bodystring).subscribe(data => {
  // console.log(' data12222 :: ' + JSON.stringify(data));
  // return data;   

  //   });
  

  //     return new Promise(resolve => {    
 
  //   this.http.post(this.apiUrlv1+'user-login',bodystring,this.headers)  

  //     //  this.http.post(this.apiUrlv1+'login.php',bodystring,this.header())   

  //     .subscribe(data => {   
  //       console.log('login data',JSON.stringify(data));   
  //       this.data = data;   
  //        resolve(this.data);  
  //        this.loader.dismissAll();  
  //        }, (err) => { 
  //              console.log(JSON.stringify(err)); 
  //              this.loader.dismissAll();     
  //            this.showAlert(JSON.stringify(err)); 
      
  //   });
  // });


// public getPsrdoctorlist(user_id) {
 
//   this.datafetch();   
//   // this.options = new RequestOptions({ headers: headers });     
   

//  return new Promise(resolve => {  
//    this.http.get(this.apiUrlv1+'get-psr-doctor-list?user_id='+ user_id,this.headers)     
//   //  .map(res => res.json())   
      
//      .subscribe(data => {   
//      this.data = data;   
//       resolve(this.data);  
//       this.loader.dismissAll(); 
//       }, (err) => {
//             console.log(err);
//             this.loader.dismissAll();
//     if(400){
//            resolve(err);
//            this.showAlert("Ooops!! Some problem is there.");
//             this.loader.dismissAll();        
//         }
//    else{
//      this.showAlert("Ooops!! Some problem is there."); 
//         this.loader.dismissAll();  
//    }
//  });

// });

// }


// public getRcpaFormData(doctor_id,psr_id) { 
 
//   this.datafetch();  
//   // this.options = new RequestOptions({ headers: headers });     
    
//  return new Promise(resolve => {  
//    this.http.get(this.apiUrlv1+'get-rcpa-data/'+ doctor_id + '/'+ psr_id,this.headers)     
//   //  .map(res => res.json())         
//       .subscribe(data => {   
//       this.data = data;   
//       resolve(this.data);  
//       this.loader.dismissAll(); 
//       }, (err) => {
//             console.log(JSON.stringify(err));
//             resolve(err);
//             this.loader.dismissAll(); 
//     // if(400){
//     //        resolve(err);
//     //        this.showAlert("Ooops!! Some problem is there.");
//     //         this.loader.dismissAll();        
//     //     }
//   //  else{
//   //    this.showAlert("Ooops!! Some problem is there."); 
//   //       this.loader.dismissAll();  
//   //  }
//  });

// });

// } 

 
// public get_psr_dashboard(bodystring) {
 
//   this.datafetch();  
//   // this.options = new RequestOptions({ headers: headers });    

//  return new Promise(resolve => {  
//    this.http.post(this.apiUrlv1+'get-psr-dashboard',bodystring,this.headers)     
//   //  .map(res => res.json())   
//      .subscribe(data => {   
//      this.data = data;   
//       resolve(this.data);  
//       this.loader.dismissAll();  
//       }, (err) => {
//             console.log(err);
//             this.loader.dismissAll();
//     if(400){
//            resolve(err);
//            this.showAlert("Ooops!! Some problem is there.");
//             this.loader.dismissAll();        
//         }
//    else{
//      this.showAlert("Ooops!! Some problem is there."); 
//         this.loader.dismissAll();  
//    }
//  });

// });

// }

 
 
// public getasmDashboard(bodystring) {  
 
//   this.datafetch();   
//  return new Promise(resolve => {  
//    this.http.post(this.apiUrlv1+'get-asm-dashboard',bodystring,this.headers)     
//   //  .map(res => res.json())   
//      .subscribe(data => {   
//      this.data = data;   
//       resolve(this.data);  
//       this.loader.dismissAll();  
//       }, (err) => {
//             console.log(err);
//             this.loader.dismissAll();
//     if(400){
//            resolve(err);
//            this.showAlert("Ooops!! Some problem is there.");
//             this.loader.dismissAll();        
//         }
//    else{
//      this.showAlert("Ooops!! Some problem is there."); 
//         this.loader.dismissAll();  
//    }
//  });

// });

// }

 

// public getPsrlist(user_id) { 
 
//   this.datafetch();    
//  return new Promise(resolve => {  
//    this.http.get(this.apiUrlv1+'get-psr-list?user_id='+ user_id,this.headers)     
//   //  .map(res => res.json())    
      
//      .subscribe(data => {   
//      this.data = data;   
//       resolve(this.data);  
//       this.loader.dismissAll(); 
//       }, (err) => {
//             console.log(err);
//             this.loader.dismissAll();
//     if(400){
//            resolve(err);
//            this.showAlert("Ooops!! Some problem is there.");
//             this.loader.dismissAll();        
//         }
//    else{
//      this.showAlert("Ooops!! Some problem is there."); 
//         this.loader.dismissAll();  
//    }
//  });

// });

// } 


// public get_category_potential(bodystring) {
 
//   this.datafetch();  
//   // this.options = new RequestOptions({ headers: headers });    

//  return new Promise(resolve => {  
//    this.http.post(this.apiUrlv1+'category-potential',bodystring,this.headers)     
//   //  .map(res => res.json())   
//      .subscribe(data => {   
//      this.data = data;   
//       resolve(this.data);  
//       this.loader.dismissAll();  
//       }, (err) => {
//             console.log(err);
//             this.loader.dismissAll();
//     if(400){
//            resolve(err);
//            this.showAlert("Ooops!! Some problem is there.");
//             this.loader.dismissAll();        
//         }
//    else{
//      this.showAlert("Ooops!! Some problem is there."); 
//         this.loader.dismissAll();  
//    }
//  });

// }); 
      
// }

// public get_brand_yield(bodystring) {
 
//   this.datafetch();    
//   // this.options = new RequestOptions({ headers: headers });    

//  return new Promise(resolve => {  
//    this.http.post(this.apiUrlv1+'brand-yield',bodystring,this.headers)     
//   //  .map(res => res.json())   
//      .subscribe(data => {   
//      this.data = data;   
//       resolve(this.data);  
//       this.loader.dismissAll();  
//       }, (err) => {
//             console.log(err);
//             this.loader.dismissAll();
//     if(400){
//            resolve(err);
//            this.showAlert("Ooops!! Some problem is there.");
//             this.loader.dismissAll();        
//         }
//    else{
//      this.showAlert("Ooops!! Some problem is there."); 
//         this.loader.dismissAll();  
//    }
//  });

// });

// }


// public rcpaStatus(bodystring) {
 
//   this.datafetch();  
//   // this.options = new RequestOptions({ headers: headers });    

//  return new Promise(resolve => { 
//    this.http.post(this.apiUrlv1+'rcpa-status',bodystring,this.headers)  
//   //  .map(res => res.json()) 
//      .subscribe(data => {  
//      this.data = data;   
//       resolve(this.data);  
//       this.loader.dismissAll();
//       }, (err) => {
//             console.log(err);
//             this.loader.dismissAll();
//     if(400){
//            resolve(err);
//            this.showAlert("Ooops!! Some problem is there.");
//             this.loader.dismissAll();        
//         }
//    else{
//      this.showAlert("Ooops!! Some problem is there."); 
//         this.loader.dismissAll();  
//    }
//  });

// });

// }
     

// public getAsmDashboard(bodystring){   
//   this.datafetch();  
//   // this.options = new RequestOptions({ headers: headers });    

//   return new Promise(resolve => { 

//    this.http.post(this.apiUrlv1+'get-asm-dashboard',bodystring,this.headers) 
//   //  .map(res => res.json()) 
//    .subscribe(data => { 
//     this.loader.dismissAll();
//      this.data = data;
//       console.log(JSON.stringify(data));
//      resolve(this.data);
//      }, (err) => {
//      console.log(err);
//      this.loader.dismissAll();
//      if(400){
//       resolve(err);
//       this.showAlert("Ooops!! Some problem is there.");
//       this.loader.dismissAll();
//      }
//      else{
//        this.showAlert("Ooops!! Some problem is there."); 
//        this.loader.dismissAll();
//      }

//    });
//  });
// } 

  


// public SendOTP(bodystring){ 
 
//   this.datafetch();  
//   // this.options = new RequestOptions({ headers: headers });  
//   return new Promise(resolve => { 
//    this.http.post(this.apiUrlv1+'sendotp.php',bodystring,this.headers) 
//   //  .map(res => res.json())
//    .subscribe(data => { 
//     this.loader.dismissAll(); 

//      this.data = data; 
//       console.log(JSON.stringify(data));
//      resolve(this.data);
//      }, (err) => {
//      console.log(err);
//      if(400){
//      resolve(err);
//       this.showAlert("Ooops!! Some problem is there.");
//      }
//      else{
//        this.showAlert("Ooops!! Some problem is there.");
//      }

//    });
//  });
// }


// public verifyOtp(bodystring){ 

//     this.datafetch();  
//     // this.options = new RequestOptions({ headers: headers });    
    
//     return new Promise(resolve => { 
//      this.http.post(this.apiUrlv1+'verifyotp.php',bodystring,this.headers) 
//     //  .map(res => res.json())
//      .subscribe(data => { 
//       this.loader.dismissAll(); 
  
//        this.data = data; 
//         console.log(JSON.stringify(data));
//        resolve(this.data);
//        }, (err) => {
//        console.log(err);
//        if(400){
//        resolve(err);
//         this.showAlert("Ooops!! Some problem is there.");
//        }
//        else{
//          this.showAlert("Ooops!! Some problem is there.");
//        }
  
//      }); 
//    }); 
//   }
 
// public changePassword(bodystring){ 
  
//   return new Promise(resolve => {  

//    this.http.post(this.apiUrlv1+'change-password',bodystring,this.headers) 
//   //  .map(res => res.json())
//    .subscribe(data => {  
//      this.data = data;
//       console.log(JSON.stringify(data));
//      resolve(this.data);
//      }, (err) => {
//      console.log(err);
//      if(400){
//      resolve(err);
//      this.showAlert("Ooops!! Some problem is there.");

//      }
//      else{
//        this.showAlert("Ooops!! Some problem is there.");
//      }

//    });
//  });
// }
    
 
 

// getuserProfile(bodystring){
  
//   // this.options = new RequestOptions({ headers: headers });  
//   return new Promise(resolve => { 
//    this.http.post(this.apiUrlv1+'my-profile',bodystring,this.headers)  
//   //  .map(res => res.json()) 
//    .subscribe(data => { 
//      this.data = data;
//       console.log(JSON.stringify(data)); 
//      resolve(this.data);
//      }, (err) => {
//         console.log(err); 
//      if(400){
//      resolve(err);
//         this.showAlert("Ooops!! Some problem is there."); 
//      }
//      else{
//         this.showAlert("Ooops!! Some problem is there.");
//      }

//    });
//  });
// }   
     
// public userUpdate(bodystring){  
 
//   // this.options = new RequestOptions({ headers: headers });    

//   return new Promise(resolve => { 
//    this.http.post(this.apiUrlv1+'user-update',bodystring,this.headers)  
//   //  .map(res => res.json())
//    .subscribe(data => { 
//      this.data = data;
//       console.log(JSON.stringify(data));  
//      resolve(this.data);
//      }, (err) => {
//         console.log(err); 
//      if(400){
//      resolve(err);
//         this.showAlert("Ooops!! Some problem is there."); 
//      }
//      else{
//         this.showAlert("Ooops!! Some problem is there.");
//      }

//    }); 
//  });
// }

// public rcpaForm(bodystring){ 
 
//     this.datafetch();  
//     // this.options = new RequestOptions({ headers: headers });     
   
//     return new Promise(resolve => { 
//      this.http.post(this.apiUrlv1+'rcpa-form',bodystring,this.headers) 
//     //  .map(res => res.json())
//      .subscribe(data => { 
//       this.loader.dismissAll();   
//        this.data = data; 
//         console.log(JSON.stringify(data));
//        resolve(this.data);
//        }, (err) => {
//        console.log(err);
//        if(400){
//        resolve(err);
//         this.showAlert("Ooops!! Some problem is there.");
//        }
//        else{
//          this.showAlert("Ooops!! Some problem is there.");
//        }
  
//      });
//    });
//   }


//////////////////////////////////////////////////
  // showAlert(msg){ 
  //   let alert = this.alertCtrl.create({
  //     title: 'X-FACTOR APP',
  //     subTitle: msg,
  //     buttons: ['OK']
  //   });
  //   alert.present();
  // }



  // datafetch()
  // {
  //     this.loader = this.loading.create({
  //       content: 'Please wait....' 
  //        }); 
  //     this.loader.present(); 
  //  }


  //  Timeoutdatafetch()
  // {
  //     this.loader = this.loading.create({
  //       content: 'Updating all Information...' 
  //        }); 
  //     this.loader.present(); 
  //  }
    
 


//   public sendEmail(username,finalAddress,CurrentID,LastInsertedDate) {
 
//   //  this.datafetch();  

//   // this.options = new RequestOptions({ headers: headers });    

      
 

// //     return new Promise(resolve => { 
      
// //     this.http.get('http://mytechnocrates.com/sendmail.php?username='+username+'&address='+finalAddress+'&CurrentID='+CurrentID+'&LastInsertedDate='+LastInsertedDate,this.options)  
// //       .map(res => res) 
// //         .subscribe(data => {  
// //         this.data = data;   
// //          resolve(this.data); 

// //         // this.loader.dismissAll();

// //          }, (err) => {
// //                console.log(err);
// //                this.loader.dismissAll();
// //        if(400){
// //               resolve(err);
// //               this.showAlert("Ooops!! Some problem is there.");
// //               // this.loader.dismissAll();
// //           }
// //       else{
// //         this.showAlert("Ooops!! Some problem is there.");
// //          //  this.loader.dismissAll();
// //       }
// //     });
// //   });
// // }
 
 
//  /////////////// Upload Documents //////
 
  

  

// // public forgotPassword(bodystring) {    
// //   this.datafetch();
// //   // this.options = new RequestOptions({ headers: headers });  
// //  return new Promise(resolve => { 
// //    this.http.post(this.apiUrlv1+'forgot-password',bodystring,this.headers)
// //   //  .map(res => res.json())
// //      .subscribe(data => {
// //      this.data = data;
// //       resolve(this.data);
// //       this.loader.dismissAll();
// //       }, (err) => {
// //             console.log(err);
// //             this.loader.dismissAll();
// //     if(400){
// //            resolve(err);
// //            this.showAlert("Ooops!! Some problem is there.");
// //             this.loader.dismissAll();
// //         }
// //    else{
// //      this.showAlert("Ooops!! Some problem is there.");
// //         this.loader.dismissAll();
// //    }
// //  });
// // });
// // }


 
 


// }



