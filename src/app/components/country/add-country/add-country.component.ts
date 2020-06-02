import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country/country.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
  country = {
    name: ''
  };
  submitted = false;
  errors = '';

  constructor(private countryService: CountryService) { }

  ngOnInit() {
  }

  saveCountry() {
    const data = {
      country: {
        name: this.country.name
      }
    };

    this.countryService.create(data)
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

  newCountry() {
    this.submitted = false;
    this.errors = ''
    this.country = {
      name: ''
    };
  }
}
