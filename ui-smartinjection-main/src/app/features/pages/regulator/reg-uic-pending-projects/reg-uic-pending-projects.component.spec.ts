import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegUicPendingProjectsComponent } from './reg-uic-pending-projects.component';

describe('RegUicPendingProjectsComponent', () => {
  let component: RegUicPendingProjectsComponent;
  let fixture: ComponentFixture<RegUicPendingProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegUicPendingProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegUicPendingProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
