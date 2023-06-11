import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UserServiceService } from 'src/app/services/UserService/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  userName: string = '';

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    this.userService.getLoggedInUser().subscribe((user: IUser) => {
      this.isLoggedIn = true;
      this.userName = user.name;
    });
  }
}
 