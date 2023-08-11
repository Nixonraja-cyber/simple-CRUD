import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
//baseUrl='http://192.168.0.108/php-api/customers';
baseUrl='http://localhost:3000';
  constructor(private http:HttpClient) { }
  GetCustomer():Observable<any>{
return this.http.get<any>(this.baseUrl+`/customers`);
  }
  PostCustomer(data:any):Observable<any>{
    return this.http.post<any>(this.baseUrl+`/customers`,data);
      }
}
