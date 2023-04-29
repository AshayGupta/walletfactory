 export class MxAccount { 
	mxGuid:string;
	handle:string;
	widgetUrl: string;
	error: boolean;
	message: string;
	type:string;
	guid:string;
	mx_userId:string; 
	mx_redirecturl:string;
 
}

export class MXBankList { 
	error: boolean;
	message: string;
	memberGuid: string; 
	session_guid:string;
	user_guid:string;
	userHandle:string;
  
}

export class userBankAccountData { 
 	handle:string;	 
	error: boolean;
	message: string;
	userHandle:string;
	institution_name:string;
	created_at:string;
	institution_id:string;
	account_name:string;
	account_mask:string;
	account_type:string;
	account_subtype:string;
	plaid_item_id:string;
	plaid_access_token:string;
	plaid_public_token:string;
	account_id:string;
	user_id:number;
	last_status:string;
	last_update:string;
  
}



export class userWalletData { 
	nickname:string;
	error: boolean;
	message: string;
	userHandle:string;
	sila_balance:string;
      
 
}