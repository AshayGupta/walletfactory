export interface Favourite {
    sourceHandle?: string;
    destinationHandle?: string;
    amount?: string;
    userHandle?: number;
}

export interface ShowFavList {
    id: string;
    source_handle?: string;
    destination_handle?: string;
    amount?: string;
    created_at?: string;
    updated_at?: string;
}