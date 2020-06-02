import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  currentRestaurant = null;
  message = '';
  errors = '';

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getRestaurant(this.route.snapshot.paramMap.get('id'));
  }

  getRestaurant(id) {
    this.restaurantService.get(id)
      .subscribe(
        data => {
          this.currentRestaurant = data;
          console.log(data);
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error);
        });
  }

  updateRestaurant() {
    this.restaurantService.update(this.currentRestaurant.id, this.currentRestaurant)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The restaurant was updated successfully!';
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error);
        });
  }

  deleteRestaurant() {
    this.restaurantService.delete(this.currentRestaurant.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/restaurants'])
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error);
        });
  }
}
