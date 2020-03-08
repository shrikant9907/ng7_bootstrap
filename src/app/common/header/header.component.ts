import { Component, OnInit } from '@angular/core';
import { NavdataService } from "../../services/navdata.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems: object;

  constructor(
    private navData: NavdataService
  ) {
  }

  ngOnInit(): void {
      
      // this.navData.getHeaderNav().subscribe(data => {
      //   this.navItems = data;
      // });
  
      this.navItems = this.navData.getHeaderNav();
     
  }

}
