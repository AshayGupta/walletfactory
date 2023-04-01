import { Component, ViewChild,OnInit } from '@angular/core';
import { NavController,ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';

import { PageName } from '../../common/enums/enums';
// import { AlertService } from '../../providers/plugin-services/alert.service';
// import { VerifyOtpService } from '../../providers/services/auth/verify-otp.service';
import { Router } from '@angular/router';
// import { WebserviceProvider } from 'src/providers/webservice/webservice';

export class OtpScreenData {
  navigateFromPage: PageName;
  title: string;
  subTitle: string
}
export class WhiteSpaceEmptyField {

  static isValid(control: FormControl): any {

   console.log("control.value=="+control.value);
   let value:string=control.value+"";
   if(value){
   let isWhitespace = (value || '').trim().length === 0;
   let isValid = !isWhitespace;
   return isValid ? null : { 'whitespace': true }

  }
}

}
export class VerifyOtpReq {
   otp: string;
}

@Component({
  selector: 'app-otp-screen',
  templateUrl: './otp-screen.page.html',
  styleUrls: ['./otp-screen.page.scss'],
})
export class OtpScreenPage implements OnInit {

  // otpForm: FormGroup;
  // submitAttempt: boolean = false;
  // resendOtpTxt: any=10;
  // otpResendTime: number = 120;
  // headerTitle: string="OTP Screen";
  // subTitle: string;
  // isSignupFlow: boolean;
  // mobile: string;
  // email: string;
  // tncTxt: string = 'Terms and Conditions';
  // otpTxt: string;
  // isProdEnv: boolean = Environment.prod;
  // verifyOtpReq = new VerifyOtpReq();
////////////////////////////////////////////

@ViewChild('mobOtp1') mobOtp1;
@ViewChild('mobOtp2') mobOtp2;
@ViewChild('mobOtp3') mobOtp3;
@ViewChild('mobOtp4') mobOtp4;

OTP1:string;
OTP2:string;
OTP3:string;
OTP4:string;
OTP:string;
Otp:string;
resend:boolean=false;
verified:boolean=true;
form: FormGroup;
Pincode:string;
invalidotp=false;
public submitAttempt = false;
public validateicon=false;
clickCount:number=0;
// color: string = "#585858";
phoneNumber= ''
verificationId="1234";
otpLength:any;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    // public alertService: AlertService,
    public toastCtrl: ToastController,
    public router: Router,
    // public webservice: WebserviceProvider
  ) { 

    // this.validateForm();
    this.form = formBuilder.group({

      mobileno:['', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern('[0-9]*'),WhiteSpaceEmptyField.isValid])],
      mobOtp1:[''],
      mobOtp2:[''],
      mobOtp3:[''],
      mobOtp4:[''],
  });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpPage');
   }
  // validateForm() {
  //   this.otpForm = this.formBuilder.group({
  //     otp: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])],
  //   });
  // }

  // sendOtp() {
  //   //  this.startOtpTimer(this.otpResendTime); 
  // } 

  // startOtpTimer(time: number) {
  //   Utils.startTimer(time).subscribe(sec => {
  //     this.resendOtpTxt = sec;
  //   });
  // }
  
  // clickSubmit() {

  //   if(!this.otpForm.valid ){
  //     this.submitAttempt = true;
  //     return;
  //   }

  //   if(this.otpForm.controls['otp'].value!="" && this.otpForm.controls['otp'].value!=null && this.otpForm.controls['otp'].value!=="undefined" ){      
  //     this.confirmOTPverifiedAlert();
  //   } 
      
  //   }
     
  //   confirmOTPverifiedAlert() {
  //     let alertTitle = "OTP Verification";
  //     let alertMsg = "This will submit your otp verification process to us.";
  //     let cancelTxt = "CANCEL";
  //     let successTxt = "VERIFY OTP"; 
  
  //     this.alertService.AlertWith3Btn.confirm(alertMsg, alertTitle, cancelTxt, successTxt, 'Confirm OTP').then(res => {
  //       this.router.navigate(['/create-password']);         
  //     },
  //       error => {
          
  //       });
  //   }
  

  ngOnInit() {
    let data = {'phoneNumber':"1234567890","smscode":"1234"}; //this.navData.getDataWithoutId();
      this.phoneNumber = data['phoneNumber'];
      this.verificationId = data['smscode'];
  }

  /***mobile otp***/
  onKeyUp2(event:any,index:any){
     var value = event.target.value.replace(/[^0-9]/gi,'');
    if(value.length>1){
      value=value.substr(0,1);
    }
     if(event.target.value.length !=1 &&  event.keyCode!=32){
      this.setFocus2(index-1);
    } else if(event.keyCode==32)
    {
      this.setFocus2(index);
    }
    else{
       this.setFocus2(index+1);
    }
     event.stopPropagation();
    this.otpLength = this.form.controls['mobOtp1'].value+""+this.form.controls['mobOtp2'].value+""+
    this.form.controls['mobOtp3'].value+""+this.form.controls['mobOtp4'].value+"";
   
    this.verifyOTP();
  }



//   resetCode(){
//     this.form.controls['mobOtp1'].value="";
//     this.form.controls['mobOtp2'].value="";
//     this.form.controls['mobOtp3'].value="";
//     this.form.controls['mobOtp4'].value="";
// }

  setFocus2(index){
    switch(index){
      case 1:
      this.mobOtp1.setFocus();
      break;
      case 2:
      this.mobOtp2.setFocus();
      break;
      case 3:
      this.mobOtp3.setFocus();
      break;
      case 4:
      this.mobOtp4.setFocus();
      break;
      }
  }
  public selectALL2($event, index){
      let pscValArr:any=[this.form.controls['mobOtp1'].value, this.form.controls['mobOtp2'].value,
        this.form.controls['mobOtp3'].value,this.form.controls['mobOtp4'].value];
       if(!$event.target.value || $event.target.value==''){
           for(var i=0; i<index; i++){
              if(pscValArr[i]=='' && i!=index){
                this.setFocus2(i+1);
                break;
              }
          }
      }else{
        $event.target.select();
      }

    }


    verifyOTP()
    {  
      // if(!this.form.valid ){
      //   this.submitAttempt = true;
      //   return;
      // }
      if(this.otpLength!=null && this.otpLength.length==4)
      {
        this.invalidotp=true;
        // this.presentToast('OTP Verified');  
         
          // this.router.navigate(['/create-password']); 
          
          this.router.navigate(['/create-profile']); 

       
       }else{
        this.invalidotp=false;
        
        // this.presentToast('OTP Invalid'); 
      }          
     
    }
    


     presentToast(text) {
      let toast :any= this.toastCtrl.create({
        message: text,
        duration: 6000,
        position: 'top'
      });
      toast.present();
    }

}
