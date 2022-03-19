import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoCreateWellComponent } from './wo-create-well.component';

describe('WoCreateWellComponent', () => {
  let component: WoCreateWellComponent;
  let fixture: ComponentFixture<WoCreateWellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoCreateWellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoCreateWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
