import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegApproveFormComponent } from './reg-approve-form.component';

describe('RegApproveFormComponent', () => {
  let component: RegApproveFormComponent;
  let fixture: ComponentFixture<RegApproveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegApproveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegApproveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
