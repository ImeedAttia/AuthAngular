import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  listUSers : User[] = [];
  constructor(private userService : UserService){
    this.getAllUSers();
  }

  getAllUSers(){
    this.userService.getAll().subscribe((response : User[])=>{
      this.listUSers = response;
    })
  }
}
