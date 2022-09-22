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

  constructor(private taskService: TaskServiceService) {

   }

  ngOnInit(): void {

  }

  public sellCurrency(value: any, key: any) {
    console.log(value, key);
    this.taskService.retrieveCurrencyExchange(value, key)
          .subscribe((result) => {
            this.currencyToBuy = +(this.currencyToSell * result.results[key]).toFixed(2);
            
          })
  }

  public buyCurrency(value: any, key: any) {
    console.log(value, key);
    
    this.taskService.retrieveCurrencyExchange(value, key)
          .subscribe((result) => {
            this.currencyToSell = +(this.currencyToBuy * result.results[key]).toFixed(2);
            
          })
  }



}
