import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PamNewReviewComponent } from './pam-new-review.component';

describe('PamNewReviewComponent', () => {
  let component: PamNewReviewComponent;
  let fixture: ComponentFixture<PamNewReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PamNewReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PamNewReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
