import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurrencyExchange } from './currency.interface';




@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) {

   }

  retrieveCurrencyExchange(currencyFrom: string, currencyTo: string,): Observable<ICurrencyExchange> {
    return this.http.get<ICurrencyExchange>(`https://api.fastforex.io/fetch-multi?from=${currencyFrom}&to=${currencyTo}&api_key=c03b48feb8-2d096d5383-rilqxm`);
  }
  
}
