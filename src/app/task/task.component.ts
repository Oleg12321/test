import { ICurrencyExchange } from './currency.interface';
import { TaskServiceService } from './task-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public currencyToSell!: number;
  public currencyToBuy!: number;
  public inputCurrency: string = 'UAH';
  public outputCurrency: string = 'USD';
  public currencyItems = ['USD', 'EUR', 'GBP'];

  constructor(private taskService: TaskServiceService) {

   }

  ngOnInit(): void {

  }

  public sellCurrency(value: string, key: string) {
    this.taskService.retrieveCurrencyExchange(value, key)
          .subscribe((result: ICurrencyExchange) => {
            this.currencyToBuy = +(this.currencyToSell * (result as any).results[key]).toFixed(2);
            
          })
  }

  public buyCurrency(value: string, key: string) {  
    this.taskService.retrieveCurrencyExchange(value, key)
          .subscribe((result) => {
            this.currencyToSell = +(this.currencyToBuy * (result as any).results[key]).toFixed(2);
            
          })
  }



}
