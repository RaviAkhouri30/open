import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public isStickyNav: boolean;

  constructor() {
    this.isStickyNav = false;
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll = (event: any): void => {
    const scrollY = event.path[1].scrollY;
    if (scrollY > 40) {
      this.isStickyNav = true;
      return;
    }
    this.isStickyNav = false;
  }

}
