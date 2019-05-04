import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  GetPostService()
  {
    return this.http.get(this.url);
  }

  CreatePostService(post)
  {
    return this.http.post(this.url, post);
  }

  UpdatePostService(post)
  {
    return this.http.patch(this.url + "/" + post.id, JSON.stringify({isRead: true}));
  }

  DeletePostService(post)
  {
    return this.http.delete(this.url + "/" + post.id);
  }
}
