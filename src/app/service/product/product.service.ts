import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {Observable} from "rxjs";
import {Book} from "../../model/Book";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_BOOK = environment.API_LOCAL+'books';

  constructor(private http:HttpClient) { }

  findById(id:number):Observable<Book>{
    return this.http.get<Book>(`${this.API_BOOK}/${id}`);
  }

  findAll():Observable<any>{
    return this.http.get<any>(this.API_BOOK)
  }
  create(book:Book):Observable<any>{
    return this.http.post<any>(this.API_BOOK,book);
  }

  update(id: number|undefined, book: Book):Observable<any>{
    return this.http.put<any>(`${this.API_BOOK}/${id}`,book);
  }

  delete(id:number):Observable<any>{
    return this.http.delete<any>(`${this.API_BOOK}/${id}`)
  }


}
