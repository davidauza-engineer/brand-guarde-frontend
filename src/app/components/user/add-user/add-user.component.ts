import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  };
  submitted = false;
  errors = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  saveUser() {
    const data = {
      user: {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        password_confirmation: this.user.password_confirmation
      }
    };

    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.errors = ''
          this.submitted = true;
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error);
        });
  }

  newUser() {
    this.submitted = false;
    this.errors = ''
    this.user = {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    };
  }
}
