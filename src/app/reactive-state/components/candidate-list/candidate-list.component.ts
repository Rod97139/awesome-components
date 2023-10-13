import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CandidatesService} from "../../services/candidates.service";

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidateListComponent implements OnInit{

  loading$!: Observable<boolean>;

  constructor(private candidateService: CandidatesService) {}

  ngOnInit(): void {
    this.loading$ = this.candidateService.loading$;
  }

}
