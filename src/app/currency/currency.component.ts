import { TaskServiceService } from './../task/task-service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  @Input() currency!: string;
  public currencyValue!: number;

  constructor(private taskService: TaskServiceService) { }

  ngOnInit(): void {
    this.taskService.retrieveCurrencyExchange(this.currency, 'UAH')
          .subscribe((result) => {
            this.currencyValue = +(result.results['UAH']).toFixed(2);
            
          })
  }

}
