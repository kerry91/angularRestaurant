import { Component, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { expand } from '../animations/app.animation';

@Component({
  selector: 'app-leaderdetail',
  templateUrl: './leaderdetail.component.html',
  styleUrls: ['./leaderdetail.component.scss'],
  animations:[
    expand()
  ]
})
export class LeaderdetailComponent {
  
    leaders: Leader[];

  constructor(private leaderService: LeaderService,
    @Inject('BaseURL') public BaseURL) { }
  
  ngOnInit() {
    this.leaderService.getLeaders()
    .subscribe(leaders => this.leaders = leaders);
  }
}
