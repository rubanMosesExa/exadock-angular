import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-document-table-name',
  templateUrl: './document-table-name.component.html',
  styleUrls: ['./document-table-name.component.css']
})
export class DocumentTableNameComponent {
  @Input() name: string | undefined;
  @Input() docTypeName: string | undefined;

  constructor() {
  }
  ngOnInit() {
  }
}
