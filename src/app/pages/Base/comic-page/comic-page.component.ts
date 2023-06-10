import { Component } from '@angular/core';

@Component({
  selector: 'app-comic-page',
  templateUrl: './comic-page.component.html',
  styleUrls: ['./comic-page.component.scss']
})
export class ComicPageComponent {
  product: any = []

  // constructor(private productService: ProductService) { }

  // ngOnInit() {
  // this.productService.getProduct().subscribe(data => {
  // this.product = data
  // })
  // }
}
