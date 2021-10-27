import {Component, OnInit, ViewChild} from '@angular/core';
import {Book} from "../../../model/Book";
import {MatPaginator} from "@angular/material/paginator";
import {BookService} from "../../../service/book/book.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: any;
  books?:Book[]=[];
  dataSource: any;
  displayedColumns: string[] = ['no','title', 'author', 'edit', 'delete'];

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.showAll()
  }

  showAll(){
    this.bookService.findAll().subscribe(data=>{
      this.books=data;
      this.dataSource=new MatTableDataSource<Book>(this.books);
      this.dataSource.paginator=this.paginator;
    })
  }

  delete(id:number){
    let deleteConFirm= confirm("Xác nhận xoá?");
    if (deleteConFirm){
      this.bookService.delete(id).subscribe(data=>{
        this.showAll();
      })
    }
  }
}
