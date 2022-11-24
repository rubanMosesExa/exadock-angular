import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBoxResponsiveComponent } from './flex-box-responsive.component';

describe('FlexBoxResponsiveComponent', () => {
  let component: FlexBoxResponsiveComponent;
  let fixture: ComponentFixture<FlexBoxResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexBoxResponsiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexBoxResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
