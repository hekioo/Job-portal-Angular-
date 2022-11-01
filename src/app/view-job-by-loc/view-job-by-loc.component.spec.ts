import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobByLocComponent } from './view-job-by-loc.component';

describe('ViewJobByLocComponent', () => {
  let component: ViewJobByLocComponent;
  let fixture: ComponentFixture<ViewJobByLocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewJobByLocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewJobByLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
