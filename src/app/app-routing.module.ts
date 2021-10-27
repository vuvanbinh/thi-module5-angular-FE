import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListBookComponent} from "./content/book/list-book/list-book.component";
import {CreateBookComponent} from "./content/book/create-book/create-book.component";
import {UpdateBookComponent} from "./content/book/update-book/update-book.component";
import {DetailBookComponent} from "./content/book/detail-book/detail-book.component";

const routes: Routes = [
  {path:'list-book',component:ListBookComponent},
  {path:'create-book',component:CreateBookComponent},
  {path:'detail-book/:id',component:DetailBookComponent},
  {path:'update-book/:id',component:UpdateBookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
