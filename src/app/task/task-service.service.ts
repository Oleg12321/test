import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) {

   }

  retrieveCurrencyExchange(currencyFrom: string, currencyTo: string,): Observable<any> {
    return this.http.get<any>(`https://api.fastforex.io/fetch-multi?from=${currencyFrom}&to=${currencyTo}&api_key=c03b48feb8-2d096d5383-rilqxm`);
  }
}
