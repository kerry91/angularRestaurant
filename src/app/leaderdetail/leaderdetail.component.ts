import { Component } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-leaderdetail',
  templateUrl: './leaderdetail.component.html',
  styleUrls: ['./leaderdetail.component.scss']
})
export class LeaderdetailComponent {
    leaders: Leader[];

  constructor(private leaderService: LeaderService) { }
  
  ngOnInit() {
    this.leaderService.getLeaders()
    .then(leaders => this.leaders = leaders);
  }
}