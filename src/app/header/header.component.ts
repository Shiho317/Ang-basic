import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public arrowIcon: string = 'fa-angle-down';
  public dropNav: string = 'drop-up';
  public dropMenu: string = 'drop-up';

  constructor() { }

  ngOnInit(): void {
  }

  toggleCompany(): void{
    if(this.arrowIcon === 'fa-angle-down'){
      this.arrowIcon = 'fa-angle-up';
      this.dropNav = 'drop-down';
    }else{
      this.arrowIcon = 'fa-angle-down';
      this.dropNav = 'drop-up';
    };
  };

  toggleProducts(): void{
    if(this.dropMenu === 'drop-up'){
      this.dropMenu = 'drop-down';
    }else{
      this.dropMenu = 'drop-up';
    }
  };

  

}
