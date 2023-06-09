import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UserServiceService } from 'src/app/services/UserService/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  users: IUser[] = [];

  constructor(private userService: UserServiceService) {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }
}
