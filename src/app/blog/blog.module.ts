import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostfullComponent } from './postfull/postfull.component';
import { RelatedpostComponent } from './relatedpost/relatedpost.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PostComponent, PostfullComponent, RelatedpostComponent, BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
