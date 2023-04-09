export class Profile {
	fName: string;
	lName: string;
	email: string;
	mobileNumber: string;
	dob: string;
	handle:string;
    error: boolean;
    message: string;
	mxGuid:string;
	isBankAdded:boolean;
	isvalidHandel:boolean;
	userHandle:string;  
}

export class MxAccount { 
	widgetUrl: string;
	error: boolean;
	message: string;
	type:string;
	guid:string;
	mx_userId:string; 
	mx_redirecturl:string;
 
}