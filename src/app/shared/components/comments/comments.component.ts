import {Component, Input} from '@angular/core';
import {Comment} from "../../../core/models/comment.model";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  @Input() comments!: Comment[];

  commentCtrl!: FormControl;

  constructor(private formBuilder: FormBuilder) {
    this.commentCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(10)]);
  }

  onLeaveComment() {

  }
}
