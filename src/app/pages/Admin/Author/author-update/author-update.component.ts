import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-update',
  templateUrl: './author-update.component.html',
  styleUrls: ['./author-update.component.scss']
})
export class AuthorUpdateComponent {
  author: any = {
    _id: '',
    name: '',
  };
  constructor(private http: HttpClient , private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params:any) => {
      const id = params['id'];
      this.http.get<any>('http://localhost:8088/api/author/' + id)
      .subscribe((data:any) => {
        this.author = data;
      });
    })
    
  }

  onHandleSubmit() {
    this.http.put<any>('http://localhost:8088/api/author/' + this.author._id, this.author)
      .subscribe((data:any) => {
        console.log('Cập nhật thành công');
      });
  }
}
