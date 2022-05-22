import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresasterSectionComponent } from './presaster-section.component';

describe('PresasterSectionComponent', () => {
  let component: PresasterSectionComponent;
  let fixture: ComponentFixture<PresasterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresasterSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresasterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
