import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isChecked: boolean;

  public monthlyIncome: number;
  public monthlyExpense: number;

  constructor() {
    this.isChecked = true;
    this.monthlyIncome = 0;
    this.monthlyExpense = 0;
  }

  ngOnInit(): void {
  }

  public onClickCheckbox = () => {
    if (this.isChecked) {
      this.isChecked = false;
      return;
    }
    this.isChecked = true;
  }

  public getMonthlyIncome = (): string => {
    const temp = String(this.monthlyIncome);
    const array = temp.split('');
    if (array.length > 3 && array.length < 5) {
      array.splice(array.length - 3, 0, ',');
    }
    if (array.length > 5) {
      array.splice(array.length - 3, 0, ',');
      array.splice(array.length - 6, 0, ',');
    }
    const amt = array.join('');
    return amt;
  }

  public setMonthlyIncome = (data: any): void => {
    this.monthlyIncome = Number(data.target.value);
  }

  public getMonthlyExpense = (): string => {
    const temp = String(this.monthlyExpense);
    const array = temp.split('');
    if (array.length > 3 && array.length < 5) {
      array.splice(array.length - 3, 0, ',');
    }
    if (array.length > 5) {
      array.splice(array.length - 3, 0, ',');
      array.splice(array.length - 6, 0, ',');
    }
    const amt = array.join('');
    return amt;
  }

  public setMonthlyExpense = (data: any): void => {
    this.monthlyExpense = Number(data.target.value);
  }

}
