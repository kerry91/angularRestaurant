import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderdetailComponent } from './leaderdetail.component';

describe('LeaderdetailComponent', () => {
  let component: LeaderdetailComponent;
  let fixture: ComponentFixture<LeaderdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
