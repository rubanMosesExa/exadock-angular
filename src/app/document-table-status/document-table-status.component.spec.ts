import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTableStatusComponent } from './document-table-status.component';

describe('DocumentTableStatusComponent', () => {
  let component: DocumentTableStatusComponent;
  let fixture: ComponentFixture<DocumentTableStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentTableStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentTableStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
