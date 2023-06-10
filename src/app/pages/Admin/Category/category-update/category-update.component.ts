import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryServiceService } from 'src/app/services/CategoryService/category-service.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent {
  categories: any = '';

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryServiceService
  ) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const cateId = +params['id'];
      this.getCategoryDetails(cateId);
    });

    this.getCategories();
  }
  getCategoryDetails(id: number) {
    this.categoryService.getOneCategory(id).subscribe((data) => {
      this.categories = data;
    });
  }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find((c: any) => c.id === categoryId);
    return category ? category.name : '';
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  onHandleSubmit() {
    this.categoryService.updateCategory(this.categories).subscribe(product => {
      console.log(product);
    })
  }
}
