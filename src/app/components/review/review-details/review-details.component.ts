import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review/review.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {
  currentReview = null;
  message = '';
  errors = '';

  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getReview(this.route.snapshot.paramMap.get('id'));
  }

  getReview(id) {
    this.reviewService.get(id)
      .subscribe(
        data => {
          this.currentReview = data;
          console.log(data);
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error);
        });
  }

  updateReview() {
    this.reviewService.update(this.currentReview.id, this.currentReview)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The review was updated successfully!';
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error);
        });
  }

  deleteReview() {
    this.reviewService.delete(this.currentReview.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/reviews'])
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error);
        });
  }
}
