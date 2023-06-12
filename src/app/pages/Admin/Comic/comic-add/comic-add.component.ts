import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
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
    author_id: '',
    description: '',
    story: '',
    images: [],
    category_id: ''
  };
  categories: ICategory[] = [];
  authors: IAuthor[] = [];

  constructor(
    private comicService: ComicServiceService,
    private categoryService: CategoryServiceService,
    private authorService: AuthorServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAuthors();
    this.getCategories();
  }

  getComicDetails(id: string) {
    this.comicService.getOneComic(id).subscribe((data: any) => {
      this.comic = data;
      console.log(this.comic);
    });
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find((c) => c._id === categoryId);
    return category ? category.name : '';
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe((data: any) => {
      this.categories = data.categories;
    });
  }

  getAuthorName(authorId: string): string {
    const author = this.authors.find((c) => c._id === authorId);
    return author ? author.name : '';
  }

  getAuthors() {
    this.authorService.getAllAuthors().subscribe((data: any) => {
      this.authors = data.authors;
    });
  }

  onHandleSubmit() {
    this.comicService.createComic(this.comic).subscribe(comic => {
      console.log(comic);
      this.router.navigate(['/admin/comic']);
    });
  }
}
