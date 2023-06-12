import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorServiceService } from 'src/app/services/AuthorService/author-service.service';

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.scss']
})
export class AuthorAddComponent {
  author: any = {
    name: '',
    // description: ''
  }

  constructor(private authorService: AuthorServiceService, private router: Router) { }

  onHandleSubmit() {
    this.authorService.createAuthor(this.author).subscribe((data: any) => {
      this.author = data
      this.router.navigate(['admin/author']);
    })
  }
}
