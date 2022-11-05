import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAppliedJobComponent } from './user-applied-job.component';

describe('UserAppliedJobComponent', () => {
  let component: UserAppliedJobComponent;
  let fixture: ComponentFixture<UserAppliedJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAppliedJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAppliedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
