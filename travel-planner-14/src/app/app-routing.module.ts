import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'destinations',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./destinations/destinations.module').then(m => m.DestinationsModule)
  },
  { path: '**', redirectTo: '' },
  { path: 'old-destinations', redirectTo: 'destinations', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// Check canLoad → If fails, redirect to login or home.
// If passes → Download lazy-loaded admin.module.
// Run canActivate → If fails, prevent route activation.
// If passes → Show AdminComponent.
