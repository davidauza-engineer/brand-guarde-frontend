import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review/review.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  review = {
    user_id: '',
    restaurant_id: '',
    body: '',
  };
  submitted = false;
  errors = '';

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
  }

  saveReview() {
    const data = {
      review: {
        user_id: this.review.user_id,
        restaurant_id: this.review.restaurant_id,
        body: this.review.body
      }
    };

    this.reviewService.create(data)
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

  newReview() {
    this.submitted = false;
    this.errors = ''
    this.review = {
      user_id: '',
      restaurant_id: '',
      body: ''
    };
  }
}
