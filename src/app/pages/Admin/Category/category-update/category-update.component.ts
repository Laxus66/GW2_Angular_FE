import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryServiceService } from 'src/app/services/CategoryService/category-service.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit {
  category: ICategory = {
    name: ''
  };

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryServiceService,
    private router: Router

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const categoryId = params['id'];
      console.log(categoryId);
      this.getCategoryDetails(categoryId);
    });
  }

  getCategoryDetails(id: string) {
    this.categoryService.getOneCategory(id).subscribe((data: any) => {
      this.category = data;
      console.log(data);
    });
  }

  onHandleSubmit() {
    console.log(this.category);
    this.categoryService.updateCategory(this.category).subscribe(data => {
      console.log(data);
      this.router.navigate(['/admin/comic']);
    })
  }
}
