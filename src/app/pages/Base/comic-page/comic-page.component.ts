import { Component } from '@angular/core';
import { ComicServiceService } from 'src/app/services/ComicService/comic-service.service';

@Component({
  selector: 'app-comic-page',
  templateUrl: './comic-page.component.html',
  styleUrls: ['./comic-page.component.scss']
})
export class ComicPageComponent {
  product: any = []

  constructor(private comicService: ComicServiceService) { }

  ngOnInit() {
    this.comicService.getAllComics().subscribe((data: any) => {
      this.product = data
      console.log('data :>> ', data);
    })
  }
}
