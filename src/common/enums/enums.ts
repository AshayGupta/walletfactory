export enum LocalStorageKey {
    BearerToken = 'BearerToken',
    IsLoggedIn = 'IsLoggedIn',
    FirstName = 'FirstName',
    LastName = 'LastName',
    NationalID = 'NationalID',
    NationalIDType = 'NationalIDType',
    Email = 'Email',
    Mobile = 'Mobile',
    PersonNo = 'PersonNo',
    PageFlow = 'PageFlow',
    UserStatus = 'UserStatus',
    ProfilePic = 'ProfilePic'
}

export enum ClientDetailsStorageKey {
    FirstName = 'FirstName',
    MiddleName = 'MiddleName',
    LastName = 'LastName',
    PhoneNumber = 'PhoneNumber',
    msisdn = 'msisdn',
    contactId = 'contactId'
}

export enum ApiRouter {
    ApiRouter1 = 'flits/',
    ApiRouter2 = 'sweeps/',
    ApiRouter3 = 'fliers/',
}

export enum StatusCode {
    Status200 = 200,
    Status403 = 403,
    Status404 = 404,
    Status412 = 412,
    Status510 = 510
}

export enum PageName {
    Signup,
    ForgotPwd,
    VerifyLoanPage,
     LoginPage
}

export enum UserStatus {
    New = 'new',
    Yes = 'yes',
    No = 'no'
}

export enum ProductTag {
    ALL = 'ALL',
    LIFE = 'LIFE',
    AMC = 'AMC',
    MPP = 'MPP',
    GI = 'GI',
    MP = 'MP',
    SR = 'SR'
}

export enum Lob {
    LIFE = '4',
    GI = '6',
    AMC = '5',
    ALL = '',
    GROUPLIFE = ''
}

export enum LoanConstants {
    STAMP_DUTY = 'STAMP_DUTY',
    PORTAL_CHARGE = 'PORTAL_CHARGE',
    LFEE_DMND = 'LFEE_DMND'
}

export enum SourceTag {
    MOBILE = 'MOBILE',
    CP = 'CP'
}

export enum EventsName {
    PayNowClicked = 'PayNowClicked',
    PaymentListCount = 'PaymentListCount'
}


export enum PopupType {
    TRANSACTION,
    SEND_MONEY,
    TRANSFER,
    CASH_OUT_TRANSFER,
    CARD_EDIT,
}