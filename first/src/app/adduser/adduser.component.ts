import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/app.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  //providers: [UserService]
})
export class AdduserComponent implements OnInit {
  constructor(private userService: UserService){}

  username: string = '';
  status: string = 'active';

  ngOnInit(): void {
    
  }
  AddUser(){
    this.userService.AddNewUser(this.username, this.status);
    console.log(this.userService.users)
  }

}
