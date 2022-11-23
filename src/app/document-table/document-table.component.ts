import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-table',
  templateUrl: './document-table.component.html',
  styleUrls: ['./document-table.component.css']
})
export class DocumentTableComponent implements OnInit {
  documentList:any[] = [];
  selectedDocumentId:any;

  constructor() { }
  ngOnInit(): void {
    this.documentList = [
      {
        "id":1,
        "name": "Ruban November Internet Bill",
        "description": "Ruban November Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "createdTime": "11.55AM",
        "lastUpdated": "4-Nov-2022",
        "lastUpdatedBy": "Ruban Moses",
        "status": "PROCESSED",
        "doctype":"Invoice"
      },
      {
        "id":2,
        "name": "Ruban Jan Internet Bill",
        "description": "Ruban Jan Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "4-Nov-2022",
        "createdTime": "12.57AM",
        "lastUpdatedBy": "Ram Chandran",
        "status": "SUBMITTED",
        "doctype":"Income From Investment"
      },
      {
        "id":3,
        "name": "Ruban Feb Internet Bill",
        "description": "Ruban Feb Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "4-Nov-2022",
        "createdTime": "13.55AM",
        "lastUpdatedBy": "John",
        "status": "SUBMITTED",
        "doctype":"Expenses"
      },
      {
        "id":4,
        "name": "Ruban March Internet Bill",
        "description": "Ruban March Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "4-Nov-2022",
        "createdTime": "15.57AM",
        "lastUpdatedBy": "Ruban Moses",
        "status": "SUBMITTED",
        "doctype":"Expenses"
      },
      {
        "id":5,
        "name": "Ruban April Internet Bill",
        "description": "Ruban April Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "4-Nov-2022",
        "createdTime": "11.55AM",
        "lastUpdatedBy": "Justin",
        "status": "PROCESSED",
        "doctype":"Invoice"
      },
      {
        "id":6,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype":"Expenses"
      },
      {
        "id":7,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype":"Expenses"
      },
      {
        "id":8,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype":"Expenses"
      },
      {
        "id":9,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype":"Expenses"
      },
      {
        "id":10,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype":"Expenses"
      },
      {
        "id":11,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype":"Expenses"
      },
      {
        "id":12,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype":"Expenses"
      },
      {
        "id":14,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype":"Expenses"
      },
      {
        "id":15,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype":"Expenses"
      },
      {
        "id":16,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype":"Expenses"
      },
      {
        "id":17,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype":"Expenses"
      },
      {
        "id":18,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype":"Expenses"
      },
      {
        "id":19,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype":"Expenses"
      },
      {
        "id":20,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype":"Expenses"
      },
      {
        "id":21,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype":"Expenses"
      },
      {
        "id":22,
        "name": "Ruban May Internet Bill",
        "description": "Ruban May Internet Bill Description",
        "createdOn": "4-Nov-2022",
        "lastUpdated": "Ruban 4-Nov-2022",
        "lastUpdatedBy": "Justin",
        "createdTime": "11.55AM",
        "status": "PROCESSED",
        "doctype":"Expenses"
      }
    ]
  }

  onClickOfTable(documentId:string) {
    this.selectedDocumentId = documentId;
  }

}
