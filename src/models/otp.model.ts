export interface Otp {
    phoneNumber: string;
    otp: string;
}

export interface VerifyOtp {
    error: boolean;
    fname: string;
    isBankAdded: string;
    isProfileComplete: boolean;
    lname: string;
    message: string;
    mobileNumber: string;
    sec: number;
}