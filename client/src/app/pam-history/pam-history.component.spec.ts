import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PamHistoryComponent } from './pam-history.component';

describe('PamHistoryComponent', () => {
  let component: PamHistoryComponent;
  let fixture: ComponentFixture<PamHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PamHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PamHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
