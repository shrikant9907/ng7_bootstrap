import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogdataService {

  apiUrl: string;

  constructor(
    private http: HttpClient
  ) { 
    this.apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  }

  getBlogPosts() {
    return this.http.get<any>(this.apiUrl);
  }

  getBlogPost(id:any) {
    return this.http.get<any>(this.apiUrl+'/'+id);
  }
}
