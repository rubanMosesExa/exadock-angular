import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-document-table-date',
  templateUrl: './document-table-date.component.html',
  styleUrls: ['./document-table-date.component.css']
})
export class DocumentTableDateComponent {
  @Input() primaryText: string | undefined;
  @Input() secondaryText: string | undefined;
}
