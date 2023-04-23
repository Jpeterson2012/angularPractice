import { Component, OnInit } from '@angular/core';
import { EnrollService } from './Services/enroll.service';
import { UserService } from './Services/app.service';
import { LoggerService } from './Services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EnrollService, UserService, LoggerService]
})
export class AppComponent implements OnInit{
  constructor(private enrollService: EnrollService, private userService: UserService, private loggerService: LoggerService) {}

  title = 'first';
  message = 'Angular is the best JavaScript framework for building client-side apps.';

  users: {name: string, status: string}[] = [];

  ngOnInit(): void {
    this.users = this.userService.users;
  }
}
