import {Component, Input} from '@angular/core';
import {Post} from "../../models/post.model";

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {

  @Input() post!: Post;

  onNewComment(comment: string) {
    console.log(comment);
  }
}
