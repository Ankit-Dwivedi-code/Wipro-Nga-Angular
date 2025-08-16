import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouterLink } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Enables HttpClient and allows DI-based interceptors
    provideHttpClient(withInterceptorsFromDi()),
    // Register the class interceptor
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // RouterLink
  ],
};
