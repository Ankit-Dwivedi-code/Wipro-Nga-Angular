import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
})
