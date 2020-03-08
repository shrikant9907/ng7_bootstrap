import { Component, OnInit } from '@angular/core';
import { BlogdataService } from 'src/app/services/blogdata.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-postfull',
  templateUrl: './postfull.component.html',
  styleUrls: ['./postfull.component.scss']
})
export class PostfullComponent implements OnInit {

  pageTitle: string;
  blogpost: any;
 
  constructor(
    private route: ActivatedRoute,
    private blogDataService: BlogdataService
  ) {
    this.pageTitle = "Blog Details";
  }

  ngOnInit(): void {

      // Add Class in body
      document.getElementsByTagName('body')['0'].classList.add('blog-details-page');

      // Blog Post
      this.blogDataService.getBlogPost(this.route.snapshot.params.id).subscribe(data=>{
        this.blogpost = data;
      })
      

  }

  ngOnDestroy(): void {
  
    // Remove Class in body
    document.getElementsByTagName('body')['0'].classList.remove('blog-details-page');
  
  }
}
