import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { IAuthor } from 'src/app/interfaces/author';
import { ICategory } from 'src/app/interfaces/category';
import { IComic } from 'src/app/interfaces/comic';
import { AuthorServiceService } from 'src/app/services/AuthorService/author-service.service';
import { CategoryServiceService } from 'src/app/services/CategoryService/category-service.service';
import { ComicServiceService } from 'src/app/services/ComicService/comic-service.service';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})
export class ComicListComponent implements OnInit {
  comics: IComic[] = [];
  categories: ICategory[] = [];
  authors: IAuthor[] = [];

  constructor(
    private comicService: ComicServiceService,
    private categoryService: CategoryServiceService,
    private authorService: AuthorServiceService
  ) { }

  ngOnInit() {
    forkJoin([
      this.comicService.getAllComics(),
      this.categoryService.getAllCategories(),
      this.authorService.getAllAuthors()
    ]).subscribe(([comics, categories, authors]) => {
      this.comics = comics;
      this.categories = categories;
      this.authors = authors;
    });
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find(cate => cate._id === categoryId);
    return category ? category.name : '';
  }

  getAuthorName(authorId: string): string {
    const author = this.authors.find(auth => auth._id === authorId);
    return author ? author.name : '';
  }

  removeItem(id: any): void {
    console.log(id);
    this.comicService.removeComic(id).subscribe(() => {
      this.comics = this.comics.filter(comic => comic._id !== id);
    });
  }

}

