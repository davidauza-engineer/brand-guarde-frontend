import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country/country.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  countries: any;
  currentCountry = null;
  currentIndex = -1;
  errors = ''

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.retrieveCountries();
  }

  retrieveCountries() {
    this.countryService.getAll()
      .subscribe(
        data => {
          this.countries = data;
          console.log(data);
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error)
        });
  }

  refreshList() {
    this.retrieveCountries();
    this.currentCountry = null;
    this.currentIndex = -1;
  }

  setActiveCountry(country, index) {
    this.currentCountry = country;
    this.currentIndex = index;
  }
}
