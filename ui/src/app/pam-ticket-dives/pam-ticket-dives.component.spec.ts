import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PamTicketDivesComponent } from './pam-ticket-dives.component';

describe('PamTicketDivesComponent', () => {
  let component: PamTicketDivesComponent;
  let fixture: ComponentFixture<PamTicketDivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PamTicketDivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PamTicketDivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
