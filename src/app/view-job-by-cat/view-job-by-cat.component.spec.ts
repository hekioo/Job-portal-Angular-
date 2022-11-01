import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobByCatComponent } from './view-job-by-cat.component';

describe('ViewJobByCatComponent', () => {
  let component: ViewJobByCatComponent;
  let fixture: ComponentFixture<ViewJobByCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewJobByCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewJobByCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
