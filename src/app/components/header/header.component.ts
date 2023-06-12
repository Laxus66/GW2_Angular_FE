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
isAdmin: boolean = false;

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.isLoggedIn = true;
      this.userName = JSON.parse(loggedInUser).name;
      this.isAdmin = JSON.parse(loggedInUser).role === 'admin';
    }

    this.userService.getLoggedInUser().subscribe((user: IUser | null) => {
      if (user) {
        this.isLoggedIn = true;
        this.userName = user.name;
        this.isAdmin = user.role === 'admin'; 
      }
    });
  }
  logout() {
    this.userService.logout();
    this.isLoggedIn = false; 
    this.userName = ''; 
    this.isAdmin = false;
  }
}
