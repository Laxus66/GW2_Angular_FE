import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorServiceService } from 'src/app/services/AuthorService/author-service.service';

@Component({
  selector: 'app-author-update',
  templateUrl: './author-update.component.html',
  styleUrls: ['./author-update.component.scss']
})
export class AuthorUpdateComponent {
  author: any = {
    name: '',
    description: ''
  }

  constructor(private router: Router, private route: ActivatedRoute, private authorService: AuthorServiceService) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const id = params['id'];
      this.authorService.getOneAuthor(id)
        .subscribe((data: any) => {
          this.author = data;
        });
    })
  }

  onHandleSubmit() {
    this.authorService.updateAuthor(this.author).subscribe((data: any) => {
      this.author = data
      console.log('data :>> ', data);
      this.router.navigate(['admin/author']);
    })
  }

}
