import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent, // Add your components here
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Ensures you can make HTTP requests
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
