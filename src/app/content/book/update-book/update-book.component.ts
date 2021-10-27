import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../service/book/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../../../model/Book";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  status: any;
  book: Book={};

  constructor(private bookService:BookService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(bId=>{
      const id = parseInt(<string>bId.get('id'))
      this.bookService.findById(id).subscribe(data=>{
        this.book=data;
      })
    })
  }

  backList() {
    this.router.navigate(['/list-book'])
  }

  update() {
    this.bookService.update(this.book.id,this.book).subscribe(data=>{
      this.status='Update information book success!';
    })
  }
}
