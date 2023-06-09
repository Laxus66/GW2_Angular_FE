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
  filteredComic: IComic[] = [];
  searchTerm: string = '';

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
      this.filteredComic = [...comics];
    });
  }

  filterComicByCategory(categoryId: number) {
    this.filteredComic = this.comics.filter(comic => comic.cate_id === categoryId);
  }

  filterComicByName() {
    this.filteredComic = this.comics.filter(comic =>
      comic.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category ? category.name : '';
  }

  getAuthorName(authorId: number): string {
    const author = this.authors.find(auth => auth.id === authorId);
    return author ? author.name : '';
  }

  removeItem(id: any) {
    console.log(id);
    this.comicService.removeComic(id).subscribe(() => {
      this.comics = this.comics.filter(comic => comic.id !== id);
      this.filteredComic = this.filteredComic.filter(comic => comic.id !== id);
    });
  }
}

