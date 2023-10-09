import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsResolver} from "./resolvers/posts.resolver";
import {PostListComponent} from "./components/post-list/post-list.component";

const routes: Routes = [
  { path: '', component: PostListComponent, resolve: { posts: PostsResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialMediaRoutingModule { }
