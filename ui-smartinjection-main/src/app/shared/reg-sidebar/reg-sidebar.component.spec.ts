import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegSidebarComponent } from './reg-sidebar.component';

describe('RegSidebarComponent', () => {
  let component: RegSidebarComponent;
  let fixture: ComponentFixture<RegSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
