import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoUnapprovedProjectComponent } from './wo-unapproved-project.component';

describe('WoUnapprovedProjectComponent', () => {
  let component: WoUnapprovedProjectComponent;
  let fixture: ComponentFixture<WoUnapprovedProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoUnapprovedProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoUnapprovedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
