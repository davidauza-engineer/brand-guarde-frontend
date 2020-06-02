import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  currentUser = null;
  message = '';
  errors = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getUser(this.route.snapshot.paramMap.get('id'));
  }

  getUser(id) {
    this.userService.get(id)
      .subscribe(
        data => {
          this.currentUser = data;
          console.log(data);
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error);
        });
  }

  updateUser() {
    this.userService.update(this.currentUser.id, this.currentUser)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The user was updated successfully!';
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error);
        });
  }

  deleteUser() {
    this.userService.delete(this.currentUser.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/users'])
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error);
        });
  }
}
