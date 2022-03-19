import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoMyWellsComponent } from './wo-my-wells.component';

describe('WoMyWellsComponent', () => {
  let component: WoMyWellsComponent;
  let fixture: ComponentFixture<WoMyWellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoMyWellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoMyWellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
