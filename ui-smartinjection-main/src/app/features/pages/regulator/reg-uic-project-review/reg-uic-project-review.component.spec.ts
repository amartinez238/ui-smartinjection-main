import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegUicProjectReviewComponent } from './reg-uic-project-review.component';

describe('RegUicProjectReviewComponent', () => {
  let component: RegUicProjectReviewComponent;
  let fixture: ComponentFixture<RegUicProjectReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegUicProjectReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegUicProjectReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
