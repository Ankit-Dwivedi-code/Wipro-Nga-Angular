import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  console.log('Request:', req.url);

  return next(req).pipe(
    tap((event) => console.log('Response received')),
    catchError((error: HttpErrorResponse) => {
      console.error('Error occurred:', error.message);
      return throwError(() => error);
    })
  );
};
