import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTableNameComponent } from './document-table-name.component';

describe('DocumentTableNameComponent', () => {
  let component: DocumentTableNameComponent;
  let fixture: ComponentFixture<DocumentTableNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentTableNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentTableNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
