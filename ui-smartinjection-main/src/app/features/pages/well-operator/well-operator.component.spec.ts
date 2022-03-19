import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellOperatorComponent } from './well-operator.component';

describe('WellOperatorComponent', () => {
  let component: WellOperatorComponent;
  let fixture: ComponentFixture<WellOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
