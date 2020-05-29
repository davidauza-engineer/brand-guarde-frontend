import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { AddReviewComponent } from './components/review/add-review/add-review.component';
import { ReviewDetailsComponent } from './components/review/review-details/review-details.component';
import { ReviewsListComponent } from './components/review/reviews-list/reviews-list.component';
import { UsersListComponent } from './components/user/users-list/users-list.component';
import { AddRestaurantComponent } from './components/restaurant/add-restaurant/add-restaurant.component';
import { RestaurantDetailsComponent } from './components/restaurant/restaurant-details/restaurant-details.component';
import { RestaurantsListComponent } from './components/restaurant/restaurants-list/restaurants-list.component';
import { AddChainComponent } from './components/chain/add-chain/add-chain.component';
import { ChainDetailsComponent } from './components/chain/chain-details/chain-details.component';
import { ChainsListComponent } from './components/chain/chains-list/chains-list.component';
import { AddCountryComponent } from './components/country/add-country/add-country.component';
import { CountryDetailsComponent } from './components/country/country-details/country-details.component';
import { CountriesListComponent } from './components/country/countries-list/countries-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserDetailsComponent,
    UserListComponent,
    AddReviewComponent,
    ReviewDetailsComponent,
    ReviewsListComponent,
    UsersListComponent,
    AddRestaurantComponent,
    RestaurantDetailsComponent,
    RestaurantsListComponent,
    AddChainComponent,
    ChainDetailsComponent,
    ChainsListComponent,
    AddCountryComponent,
    CountryDetailsComponent,
    CountriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
