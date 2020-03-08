import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  slides = [
    {img: "https://images.unsplash.com/photo-1548270592-2a3ce1c8cc03?ixlib=rb-1.2.1&auto=format&fit=crop&w=732&q=80"},
    {img: "https://images.unsplash.com/photo-1582005450386-52b25f82d9bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"},
    {img: "https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"},
    {img: "https://images.unsplash.com/photo-1562664348-2188b99b5157?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"},
    {img: "https://images.unsplash.com/photo-1578991624414-276ef23a534f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=885&q=80"}
  ];
 
  slideConfig = {
    "slidesToShow": 3, 
    "slidesToScroll": 1,
    "nextArrow":"<div class='nav-btn next-slide position-absolute'><i class='fa fa-angle-right' aria-hidden='true'></i></div>",
    "prevArrow":"<div class='nav-btn prev-slide position-absolute'><i class='fa fa-angle-left' aria-hidden='true'></i></div>",
    "dots":true,
    "infinite": true
  };

  ngOnInit(): void {

    // Add Class in body
    document.getElementsByTagName('body')['0'].classList.add('home-page');

  }

  ngOnDestroy(): void {
    
    // Remove Class in body
    document.getElementsByTagName('body')['0'].classList.remove('home-page');
 
  }

}
