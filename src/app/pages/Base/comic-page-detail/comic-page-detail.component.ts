import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorServiceService } from 'src/app/services/AuthorService/author-service.service';
import { ComicServiceService } from 'src/app/services/ComicService/comic-service.service';

@Component({
  selector: 'app-comic-page-detail',
  templateUrl: './comic-page-detail.component.html',
  styleUrls: ['./comic-page-detail.component.scss']
})
export class ComicPageDetailComponent {
  comic: any;
  author: any;
  constructor(private comicService: ComicServiceService, private router: ActivatedRoute, private authorService: AuthorServiceService) { }

  ngOnInit() {
    this.router.params.subscribe((params: any) => {
      const id = params['id'];
      this.comicService.getOneComic(id).subscribe((data: any) => {
        this.comic = data
        this.authorService.getOneAuthor(data.author_id).subscribe((data: any) => {
          this.author = data
          console.log('data :>> ', data);
        })
      })
    })
  }
}
