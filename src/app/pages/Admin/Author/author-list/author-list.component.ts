import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthorServiceService } from 'src/app/services/AuthorService/author-service.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent {
  author: any[] = [];

  constructor(private authorService: AuthorServiceService , private http:HttpClient) { }
  ngOnInit() {
    this.http.get<any>('http://localhost:8088/api/author')
      .subscribe((data:any) => {
        this.author = data.authors;
        console.log('object :>> ',  data.authors);
      });
  }
  onRemove(id: any) {
    this.authorService.removeAuthor(id).subscribe((data:any) => {
      this.author = this.author.filter(a => a._id !== id)
    })
  }
}
