import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePropertyDetailsComponent } from './create-property-details.component';

describe('CreatePropertyDetailsComponent', () => {
  let component: CreatePropertyDetailsComponent;
  let fixture: ComponentFixture<CreatePropertyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePropertyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePropertyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
