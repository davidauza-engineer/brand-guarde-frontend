import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserComponent } from './components/user/add-user/add-user.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
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
import { WelcomeComponent} from "./components/welcome/welcome.component";


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'new-user', component: AddUserComponent },
  { path: 'reviews', component: ReviewsListComponent },
  { path: 'reviews/:id', component: ReviewDetailsComponent },
  { path: 'new-review', component: AddReviewComponent },
  { path: 'restaurants', component: RestaurantsListComponent },
  { path: 'restaurants/:id', component: RestaurantDetailsComponent },
  { path: 'new-restaurant', component: AddRestaurantComponent },
  { path: 'chains', component: ChainsListComponent },
  { path: 'chains/:id', component: ChainDetailsComponent },
  { path: 'new-chain', component: AddChainComponent },
  { path: 'countries', component: CountriesListComponent },
  { path: 'countries/:id', component: CountryDetailsComponent },
  { path: 'new-country', component: AddCountryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
