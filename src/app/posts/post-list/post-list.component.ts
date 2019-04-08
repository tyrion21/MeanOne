import { Component, OnInit, OnDestroy} from '@angular/core';

import { Post } from '../post.model';
import { PostsServices } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];

  private postsSub: Subscription;

  constructor(public postsService: PostsServices) {

   }

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().
      subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  // posts = [
  //   {title:'First Pos t',content:'this is the first post\'s content'},
  //   {title:'Second Post',content:'this is the second post\'s content'},
  //   {title:'Third Post',content:'this is the third post\'s content'}
  // ]


}
