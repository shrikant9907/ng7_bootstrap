import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {

  pageTitle: string;

  constructor() {
  
    this.pageTitle = "Page Not Found"
    
  }

  ngOnInit(): void {
  }

}
