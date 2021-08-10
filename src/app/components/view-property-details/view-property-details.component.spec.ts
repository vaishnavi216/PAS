import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPropertyDetailsComponent } from './view-property-details.component';

describe('ViewPropertyDetailsComponent', () => {
  let component: ViewPropertyDetailsComponent;
  let fixture: ComponentFixture<ViewPropertyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPropertyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPropertyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
