
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { BlogComponent } from './blog.component';
import { PostfullComponent } from './postfull/postfull.component';

const routes: Routes = [
  {
      path: '', 
      component: BlogComponent
  },
  {
      path:':id',
      component: PostfullComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }