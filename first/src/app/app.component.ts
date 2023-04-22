import { Component, OnInit } from '@angular/core';
import { EnrollService } from './Services/enroll.service';
import { UserService } from './Services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EnrollService, UserService]
})
export class AppComponent implements OnInit{
  constructor(private enrollService: EnrollService, private userService: UserService) {}

  title = 'first';
  message = 'Angular is the best JavaScript framework for building client-side apps.';

  users: {name: string, status: string}[] = [];

  ngOnInit(): void {
    this.users = this.userService.users;
  }
}
