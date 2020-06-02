import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {

  restaurants: any;
  currentRestaurant = null;
  currentIndex = -1;
  errors = ''

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.retrieveRestaurants();
  }

  retrieveRestaurants() {
    this.restaurantService.getAll()
      .subscribe(
        data => {
          this.restaurants = data;
          console.log(data);
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error)
        });
  }

  refreshList() {
    this.retrieveRestaurants();
    this.currentRestaurant = null;
    this.currentIndex = -1;
  }

  setActiveRestaurant(restaurant, index) {
    this.currentRestaurant= restaurant;
    this.currentIndex = index;
  }
}
