import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  //save userId in a varibale
  userId: string = '';
  userInfo: User = new User();
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
    this.userId = this.authService.getUserId() as string;
    this.refreshProfile();
  }

  //get User Info
  refreshProfile() {
    this.userService.get(this.userId).subscribe((response: User) => {
      this.userInfo = response;
    });
  }
}
