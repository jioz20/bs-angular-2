import { Component, OnInit } from '@angular/core';
import {PostsService} from './posts.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  
  posts;
  constructor(private postService : PostsService) { }

  ngOnInit() {
    this.postService.GetPostService().subscribe(result => {
      this.posts = result;
    }, error => {
      console.log(error)
    });
  }

  createPosts(input: HTMLInputElement)
  {

    let post = {id: this.posts.length + 1, title: input.value};
    input.value = '';

    this.postService.CreatePostService(post).subscribe(result => {
      this.posts.splice(0, 0, post);
    })
  }


  updatePost(post)
  {
    this.postService.UpdatePostService(post).subscribe(result => {
      console.log(result);
    })
  }

  deletePost(post)
  {
    this.postService.DeletePostService(post).subscribe(result => {
      let index = this.posts.indexOf(post);

      this.posts.splice(index, 1);
      // console.log(index);
    }, (error: Response) => {
      if(error.status === 404)
        alert('This is post has already been deleted');
      else 
        console.log(error);
    })
  }
  

}
