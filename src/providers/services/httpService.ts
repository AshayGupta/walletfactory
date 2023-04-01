import { ApiUrls } from '../../common/constants/constants';
import { map, timeout, retryWhen, scan, delay } from 'rxjs/operators';
import { Observable } from "rxjs";
import { ApiResource, Serializer } from "../../common/interfaces/serializer";
import { LocalStorageKey } from "../../common/enums/enums";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private baseApiUrl: string = ApiUrls.baseUrl;
    private defaultHeader = {
        // 'content-type': 'application/x-www-form-urlencoded'
    };

    constructor(
        private http: HttpClient,
    ) { }

    post(path: string, data: any = {}): Observable<any> {
        let httpHeaders = new HttpHeaders(this.defaultHeader);
        // httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + localStorage.getItem(LocalStorageKey.BearerToken));
        
        // let params = new HttpParams();

        return this.http.post(this.baseApiUrl + path, data, { headers: httpHeaders });
    }
    
    get(path: string): Observable<any> {
        let httpHeaders = new HttpHeaders(this.defaultHeader);
        // httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + localStorage.getItem(LocalStorageKey.BearerToken));
        
        let params = new HttpParams();
        
        return this.http.get(this.baseApiUrl + path, {headers: httpHeaders, params});
    }
    
}