import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoPendingProjectComponent } from './wo-pending-project.component';

describe('WoPendingProjectComponent', () => {
  let component: WoPendingProjectComponent;
  let fixture: ComponentFixture<WoPendingProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoPendingProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoPendingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
