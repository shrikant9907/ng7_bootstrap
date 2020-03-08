import { Component, OnInit } from '@angular/core';
import { BlogdataService } from '../services/blogdata.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  pageTitle: string;
  blogposts: object;
 
  constructor(
    private blogDataService: BlogdataService
  ) {
    this.pageTitle = "Blog";
  }

  ngOnInit(): void {

      // Add Class in body
      document.getElementsByTagName('body')['0'].classList.add('blog-page');

      // Blog Posts
      this.blogDataService.getBlogPosts().subscribe(data=>{
        this.blogposts = data;
      })

  }

  ngOnDestroy(): void {
  
    // Remove Class in body
    document.getElementsByTagName('body')['0'].classList.remove('blog-page');
  
  }
}
