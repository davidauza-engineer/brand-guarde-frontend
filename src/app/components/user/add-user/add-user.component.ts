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

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  saveUser() {
    const data = {
      name: this.user.name,
      email: this.user.email,
      password: this.user.password,
      password_confirmation: this.user.password_confirmation
    };

    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newUser() {
    this.submitted = false;
    this.user = {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    };
  }
}
