import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.css']
})
export class TogglerComponent implements OnInit {

  @Input() public isChecked: boolean;

  constructor() {
    this.isChecked = true;
  }

  ngOnInit(): void {
  }

}
