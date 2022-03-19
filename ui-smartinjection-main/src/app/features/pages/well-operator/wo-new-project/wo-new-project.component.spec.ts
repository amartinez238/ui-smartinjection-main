import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoNewProjectComponent } from './wo-new-project.component';

describe('WoNewProjectComponent', () => {
  let component: WoNewProjectComponent;
  let fixture: ComponentFixture<WoNewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoNewProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoNewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
