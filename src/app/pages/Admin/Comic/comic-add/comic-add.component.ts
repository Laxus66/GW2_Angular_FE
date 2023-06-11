import { Component, OnInit } from '@angular/core';
import { IAuthor } from 'src/app/interfaces/author';
import { ICategory } from 'src/app/interfaces/category';
import { IComic } from 'src/app/interfaces/comic';
import { AuthorServiceService } from 'src/app/services/AuthorService/author-service.service';
import { CategoryServiceService } from 'src/app/services/CategoryService/category-service.service';
import { ComicServiceService } from 'src/app/services/ComicService/comic-service.service';

@Component({
  selector: 'app-comic-add',
  templateUrl: './comic-add.component.html',
  styleUrls: ['./comic-add.component.scss']
})
export class ComicAddComponent implements OnInit {
  comic: IComic = {
    name: '',
    author_id: 0,
    description: '',
    cate_id: 0,
    images: []
  };
  categories: ICategory[] = [];
  authors: IAuthor[] = [];

  constructor(
    private comicService: ComicServiceService,
    private categoryService: CategoryServiceService,
    private authorService: AuthorServiceService
  ) { }

  ngOnInit() {
    this.getCategories();
    this.getAuthors();
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe((data: ICategory[]) => {
      this.categories = data;
    });
  }

  getAuthors() {
    this.authorService.getAllAuthors().subscribe((data: IAuthor[]) => {
      this.authors = data;
    });
  }

  onHandleSubmit() {
    this.comicService.createComic(this.comic).subscribe((comic) => {
      console.log(comic);
    });
  }
}
