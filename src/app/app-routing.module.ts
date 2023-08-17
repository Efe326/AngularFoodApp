import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component'; // Import the SearchComponent

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: SearchComponent }, // Define dynamic route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
