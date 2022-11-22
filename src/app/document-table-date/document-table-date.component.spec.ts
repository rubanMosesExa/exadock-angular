import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTableDateComponent } from './document-table-date.component';

describe('DocumentTableDateComponent', () => {
  let component: DocumentTableDateComponent;
  let fixture: ComponentFixture<DocumentTableDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentTableDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentTableDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
