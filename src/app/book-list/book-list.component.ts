// src/app/book-list/book-list.component.ts
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  template: `
    <div *ngIf="books.length">
      <h2>Books Read in School</h2>
      <ul>
        <li *ngFor="let book of books">{{ book }}</li>
      </ul>
    </div>
    <div *ngIf="!books.length">
      <p>Loading...</p>
    </div>
  `,
})
export class BookListComponent implements OnInit {
  books: string[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }
}
