export interface Otp {
    phoneNumber: string;
    otp: string;
}

export interface VerifyOtp {
    fname: string;
    isBankAdded: string;
    isProfileComplete: boolean;
    lname: string;
    mobileNumber: string;
    sec: number;
    error: boolean;
    message: string;
}