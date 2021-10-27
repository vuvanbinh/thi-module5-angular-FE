import { Component, OnInit } from '@angular/core';
import {Book} from "../../../model/Book";
import {BookService} from "../../../service/book/book.service";
import {Router, RouterModule, Routes} from "@angular/router";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  status: any;
  book: Book = {};

  constructor(private bookService:BookService,
              private router :Router) { }

  ngOnInit(): void {
  }

  create() {
    this.bookService.create(this.book).subscribe(data=>{
      this.status='Create new book success!'
    })
  }

  backList() {
    this.router.navigate(['/list-book'])
  }
}
