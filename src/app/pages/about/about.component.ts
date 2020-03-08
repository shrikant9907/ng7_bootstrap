import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  pageTitle: string;

  constructor() {
    this.pageTitle = "About Us";
  }

  ngOnInit(): void {

      // Add Class in body
      document.getElementsByTagName('body')['0'].classList.add('about-page');

  }

  ngOnDestroy(): void {
  
    // Remove Class in body
    document.getElementsByTagName('body')['0'].classList.remove('about-page');
  
  }

}
