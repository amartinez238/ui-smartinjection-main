import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandingTableComponent } from './expanding-table.component';

describe('OverviewWellsTableComponent', () => {
  let component: ExpandingTableComponent;
  let fixture: ComponentFixture<ExpandingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandingTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
