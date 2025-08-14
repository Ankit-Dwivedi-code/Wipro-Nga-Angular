import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationsComponent } from './destinations/destinations.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'destinations',
    loadComponent: () =>
      import('./destinations/destinations.component')
        .then(m => m.DestinationsComponent)
  },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// Lazy loading for destinations
// {
//   path: 'destinations',
//   canActivate: [AuthGuard],
//   loadChildren: () =>
//     import('./destinations/destinations.module').then(m => m.DestinationsModule)
// }