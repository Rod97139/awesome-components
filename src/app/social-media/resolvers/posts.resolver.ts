import {Injectable} from "@angular/core";
import {Post} from "../models/post.model";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {PostService} from "../services/post.service";
import {Observable} from "rxjs";

@Injectable()
export class PostsResolver implements Resolve<Post[]> {
  constructor(private postService: PostService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]>  {
    return this.postService.getPosts();
  }


}
