import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import {PostService} from "./services/post.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SocialMediaRoutingModule
  ],
  providers: [
    PostService
  ]
})
export class SocialMediaModule { }
