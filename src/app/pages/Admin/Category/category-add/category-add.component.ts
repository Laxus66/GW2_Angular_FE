import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryServiceService } from 'src/app/services/CategoryService/category-service.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent {
  categories: any = {
    name: ""
  };

  constructor(private categoryService: CategoryServiceService) { }

  onHandleSubmit() {
    console.log(this.categories);
    this.categoryService.createCategory(this.categories).subscribe((data) => {
      console.log(data);
    });
  }
}

