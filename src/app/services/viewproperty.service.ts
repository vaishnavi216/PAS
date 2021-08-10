import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IPropertyFormData } from "../models/propertyData";
import { ILoginFormData } from "../models/loginFormData";


@Injectable({
    providedIn: 'root',
})
export class ViewPropertyService {
    private baseURL = environment.consumerBaseURL;

    constructor(private httpClient: HttpClient) {}
    loginUser(data: ILoginFormData): Observable<any>{
        const loginURL = `${environment.loginBaseURL}/auth/authenticate`
        return this.httpClient.post(loginURL, data);
    }

    viewPropertyDetails(cid: number,pid: number): Observable<any>{
        const createURL = `${this.baseURL}/viewConsumerProperty/${cid}/${pid}`;
        const header = {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Access-Control-Allow-Origin': '*'
        }
        return this.httpClient.get<IPropertyFormData>(createURL, {
            headers: header
        });
    }
}
