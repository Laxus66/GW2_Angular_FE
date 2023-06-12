import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category'
import { CategoryServiceService } from 'src/app/services/CategoryService/category-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  categories: ICategory[] = [];
  constructor(private CategoryServiceService: CategoryServiceService) {
    this.CategoryServiceService.getAllCategories().subscribe(data => {
      this.categories = data
      console.log(this.categories)
    }, error => console.log(error.message))
  }

}
