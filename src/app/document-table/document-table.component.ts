import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-table',
  templateUrl: './document-table.component.html',
  styleUrls: ['./document-table.component.css']
})
export class DocumentTableComponent implements OnInit {
  documentList: any[] = [];
  selectedDocument: any;

  constructor() { }
  ngOnInit(): void {
    this.documentList = [
      {
        "id": 1,
        "name": "Ruban November Internet Bill",
        "description": "Ruban November Description",
        "createdOn": "4-Nov-2022",
        "createdTime": "11.55AM",
        "lastUpdated": "4-Nov-2022",
        "lastUpdatedBy": "Ruban Moses",
        "status": "PROCESSED",
        "doctype": "Invoice",
        "size": "147 KB"
      },
      {
        "id": 2,
        "name": "Ruban Jan Internet Bill",
        "description": "Ruban Jan Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "4-Nov-2022",
        "createdTime": "12.57AM",
        "lastUpdatedBy": "Ram Chandran",
        "status": "SUBMITTED",
        "doctype": "Income From Investment",
        "size": "177 KB"
      },
      {
        "id": 3,
        "name": "Ruban Feb Internet Bill",
        "description": "Ruban Feb Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "4-Nov-2022",
        "createdTime": "13.55AM",
        "lastUpdatedBy": "John",
        "status": "SUBMITTED",
        "doctype": "Expenses",
        "size": "2147 KB"
      },
      {
        "id": 4,
        "name": "Ruban March Internet Bill",
        "description": "Ruban March Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "4-Nov-2022",
        "createdTime": "15.57AM",
        "lastUpdatedBy": "Ruban Moses",
        "status": "SUBMITTED",
        "doctype": "Expenses",
        "size": "4547 KB"
      },
      {
        "id": 5,
        "name": "Ruban April Internet Bill",
        "description": "Ruban April Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "4-Nov-2022",
        "createdTime": "11.55AM",
        "lastUpdatedBy": "Justin",
        "status": "PROCESSED",
        "doctype": "Invoice",
        "size": "847 KB"
      },
      {
        "id": 6,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype": "Expenses",
        "size": "147 KB"
      },
      {
        "id": 7,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype": "Expenses",
        "size": "147 KB"
      },
      {
        "id": 8,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype": "Expenses",
        "size": "147 KB"
      },
      {
        "id": 9,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype": "Expenses",
        "size": "147 KB"
      },
      {
        "id": 10,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype": "Expenses",
        "size": "147 KB"
      },
      {
        "id": 11,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype": "Expenses",
        "size": "147 KB"
      },
      {
        "id": 12,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype": "Expenses",
        "size": "147 KB"
      },
      {
        "id": 14,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype": "Expenses",
        "size": "147 KB"
      },
      {
        "id": 15,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype": "Expenses",
        "size": "147 KB"
      },
      {
        "id": 16,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype": "Expenses",
        "size": "147 KB"
      },
      {
        "id": 17,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype": "Expenses",
        "size": "147 KB"
      },
      {
        "id": 18,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype": "Expenses",
        "size": "147 KB"
      },
      {
        "id": 19,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype": "Expenses",
        "size": "147 KB"
      },
      {
        "id": 20,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype": "Expenses",
        "size": "147 KB"
      },
      {
        "id": 21,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype": "Expenses",
        "size": "147 KB"
      },
      {
        "id": 22,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype": "Expenses",
        "size": "147 KB"
      }
    ]
  }

  onClickOfTable(document: any) {
    console.log("selectedDocument", document)
    this.selectedDocument = document;
  }
  onClickOfBackButton() {
    this.selectedDocument = null;
  }

}