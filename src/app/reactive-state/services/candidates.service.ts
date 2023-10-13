import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Candidate} from "../models/candidate.model";

@Injectable()
export class CandidatesService {
  constructor(private http: HttpClient) {}
  private _loading$ = new BehaviorSubject<boolean>(false);

  get loading$() {
    return this._loading$.asObservable();
  }

  private _candidates$ = new BehaviorSubject<Candidate[]>([]);
  get candidates$(): Observable<Candidate[]> {
    return this._candidates$.asObservable();
  }

  private setLoadingStatus(loading: boolean) {
    this._loading$.next(loading);
  }
}
