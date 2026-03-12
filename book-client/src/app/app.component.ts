import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from './book.service';
import { Book } from './book.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  books: Book[] = [];
  editingBook: Book | null = null;
  showForm = false;

  form = {
    title: '',
    author: '',
    isbn: '',
    publicationDate: ''
  };

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.bookService.getAll().subscribe(data => this.books = data);
  }

  openAdd() {
    this.editingBook = null;
    this.form = { title: '', author: '', isbn: '', publicationDate: '' };
    this.showForm = true;
  }

  openEdit(book: Book) {
    this.editingBook = { ...book };
    this.form = {
      title: book.title,
      author: book.author,
      isbn: book.isbn,
      publicationDate: book.publicationDate.slice(0, 10)
    };
    this.showForm = true;
  }

  cancel() {
    this.showForm = false;
    this.editingBook = null;
  }

  save() {
    if (this.editingBook) {
      const updated: Book = { id: this.editingBook.id, ...this.form };
      this.bookService.update(this.editingBook.id, updated).subscribe(() => {
        this.load();
        this.cancel();
      });
    } else {
      this.bookService.create(this.form).subscribe(() => {
        this.load();
        this.cancel();
      });
    }
  }

  delete(id: number) {
    if (confirm('Remove this book?')) {
      this.bookService.delete(id).subscribe(() => this.load());
    }
  }
}