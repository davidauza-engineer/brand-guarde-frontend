import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review/review.service';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent implements OnInit {

  reviews: any;
  currentReview = null;
  currentIndex = -1;
  errors = ''

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.retrieveReviews();
  }

  retrieveReviews() {
    this.reviewService.getAll()
      .subscribe(
        data => {
          this.reviews = data;
          console.log(data);
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error)
        });
  }

  refreshList() {
    this.retrieveReviews();
    this.currentReview = null;
    this.currentIndex = -1;
  }

  setActiveReview(review, index) {
    this.currentReview = review;
    this.currentIndex = index;
  }
}
