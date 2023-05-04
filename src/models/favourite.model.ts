export interface Favourite {
    sourceHandle?: string;
    destinationHandle?: string;
    amount?: string;
    userHandle?: string;
    note?:string;
    bankName?:string;
    sendToBank?:string;
    accountName?:string;

}

export interface ShowFavList {
    id: string;
    source_handle?: string;
    destination_handle?: string;
    amount?: string;
    created_at?: string;
    updated_at?: string;
}