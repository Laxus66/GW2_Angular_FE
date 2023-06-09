import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ICategory } from 'src/app/interfaces/category';
import { IComic } from 'src/app/interfaces/comic';
import { ComicServiceService } from 'src/app/services/ComicService/comic-service.service';
import { CategoryServiceService } from 'src/app/services/CategoryService/category-service.service';
import { AuthorServiceService } from 'src/app/services/AuthorService/author-service.service';
import { IAuthor } from 'src/app/interfaces/author';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  categories: ICategory[] = []

  constructor(private categoryService: CategoryServiceService) {
  }
  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  removeItem(id: any) {
    this.categoryService.removeCategory(id).subscribe(() => {
      this.categories = this.categories.filter(cate => cate.id !== id);
    });
  }
}
