import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country/country.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  currentCountry = null;
  message = '';
  errors = '';

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getCountry(this.route.snapshot.paramMap.get('id'));
  }

  getCountry(id) {
    this.countryService.get(id)
      .subscribe(
        data => {
          this.currentCountry = data;
          console.log(data);
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error);
        });
  }

  updateCountry() {
    this.countryService.update(this.currentCountry.id, this.currentCountry)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The country was updated successfully!';
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error);
        });
  }

  deleteCountry() {
    this.countryService.delete(this.currentCountry.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/countries'])
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error);
        });
  }
}
