import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  restaurant = {
    chain_id: '',
    country_id: '',
    name: '',
    address: ''
  };
  submitted = false;
  errors = '';

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
  }

  saveRestaurant() {
    const data = {
      restaurant: {
        chain_id: this.restaurant.chain_id,
        country_id: this.restaurant.country_id,
        name: this.restaurant.name,
        address: this.restaurant.address
      }
    };

    this.restaurantService.create(data)
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

  newRestaurant() {
    this.submitted = false;
    this.errors = ''
    this.restaurant = {
      chain_id: '',
      country_id: '',
      name: '',
      address: ''
    };
  }
}
