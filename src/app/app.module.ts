import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentTableComponent } from './document-table/document-table.component';
import { DocumentTableNameComponent } from './document-table-name/document-table-name.component';
import { DocumentTableDateComponent } from './document-table-date/document-table-date.component';
import { DocumentTableStatusComponent } from './document-table-status/document-table-status.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentTableComponent,
    DocumentTableNameComponent,
    DocumentTableDateComponent,
    DocumentTableStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
