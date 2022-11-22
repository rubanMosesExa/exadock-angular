import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-table',
  templateUrl: './document-table.component.html',
  styleUrls: ['./document-table.component.css']
})
export class DocumentTableComponent implements OnInit {
  documentList:any[] = [];

  constructor() { }
  ngOnInit(): void {
    this.documentList = [
      {
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

}
