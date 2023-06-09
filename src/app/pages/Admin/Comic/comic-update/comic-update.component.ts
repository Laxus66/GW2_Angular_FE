import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAuthor } from 'src/app/interfaces/author';
import { ICategory } from 'src/app/interfaces/category';
import { AuthorServiceService } from 'src/app/services/AuthorService/author-service.service';
import { CategoryServiceService } from 'src/app/services/CategoryService/category-service.service';
import { ComicServiceService } from 'src/app/services/ComicService/comic-service.service';

@Component({
  selector: 'app-comic-update',
  templateUrl: './comic-update.component.html',
  styleUrls: ['./comic-update.component.scss']
})
export class ComicUpdateComponent {
  comic: any;
  categories: ICategory[] = [];
  authors: IAuthor[] = [];

  constructor(
    private route: ActivatedRoute,
    private comicService: ComicServiceService,
    private categoryService: CategoryServiceService,
    private authorService: AuthorServiceService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const comicId = +params['id'];
      this.getComicDetails(comicId);
    });
    this.getAuthors();
    this.getCategories();
  }

  getComicDetails(id: number) {
    this.comicService.getOneComic(id).subscribe((data) => {
      this.comic = data;
      console.log(this.comic);
    });
  }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find((c) => c.id === categoryId);
    return category ? category.name : '';
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  getAuthorName(authorId: number): string {
    const author = this.authors.find((c) => c.id === authorId);
    return author ? author.name : '';
  }

  getAuthors() {
    this.authorService.getAllAuthors().subscribe((data) => {
      this.authors = data;
    });
  }

  onHandleSubmit() {
    this.comicService.updateComic(this.comic).subscribe(comic => {
      console.log(comic);
    });
  }
}
