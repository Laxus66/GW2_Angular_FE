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
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.isLoggedIn = true;
      this.userName = JSON.parse(loggedInUser).name;
    }

    this.userService.getLoggedInUser().subscribe((user: IUser | null) => {
      if (user) {
        this.isLoggedIn = true;
        this.userName = user.name;
      }
    });
  }
  logout() {
    this.userService.logout();
    this.isLoggedIn = false; 
    this.userName = ''; 
  }
}
