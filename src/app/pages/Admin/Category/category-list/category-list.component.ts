import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ICategory } from 'src/app/interfaces/category';
import { IComic } from 'src/app/interfaces/comic';
import { ComicServiceService } from 'src/app/services/ComicService/comic-service.service';
import { CategoryServiceService } from 'src/app/services/CategoryService/category-service.service';


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
    this.categoryService.getAllCategories().subscribe((data: any) => {
      this.categories = data.categories;
      console.log();
    });
  }

  removeItem(id: any) {
    const confirm = window.confirm("Bạn có muốn xóa category này !")
    if (confirm) {
      this.categoryService.removeCategory(id).subscribe(() => {
        this.categories = this.categories.filter(cate => cate._id !== id);
      });
    }
  }
}
