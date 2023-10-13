import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Candidate} from "../../models/candidate.model";
import {CandidatesService} from "../../services/candidates.service";

@Component({
  selector: 'app-single-candidate',
  templateUrl: './single-candidate.component.html',
  styleUrls: ['./single-candidate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleCandidateComponent implements OnInit {

  loading$!: Observable<boolean>;
  candidate$!: Observable<Candidate>;

  constructor(private candidatesServices: CandidatesService) { }

  ngOnInit(): void {
    this.initObservables();
  }

  private initObservables() {
    this.loading$ = this.candidatesServices.loading$;
  }

  onHire() {

  }

  onRefuse() {

  }

  onGoBack() {

  }
}
