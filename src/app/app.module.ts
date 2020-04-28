import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { FormsModule } from '@angular/forms';
import { SearchPaginationComponent } from './search-pagination/search-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFieldComponent,
    SearchPaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
