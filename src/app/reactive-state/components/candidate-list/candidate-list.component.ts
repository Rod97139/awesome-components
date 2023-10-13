import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidateListComponent implements OnInit{

  constructor() {
  }

  @Input() obj!: { firstName: string, lastName: string };

  ngOnInit(): void {
  }

}
