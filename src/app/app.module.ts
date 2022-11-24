import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentTableComponent } from './document-table/document-table.component';
import { DocumentTableNameComponent } from './document-table-name/document-table-name.component';
import { DocumentTableDateComponent } from './document-table-date/document-table-date.component';
import { DocumentTableStatusComponent } from './document-table-status/document-table-status.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentTableComponent,
    DocumentTableNameComponent,
    DocumentTableDateComponent,
    DocumentTableStatusComponent,
    LoginFormComponent,
    GridLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
