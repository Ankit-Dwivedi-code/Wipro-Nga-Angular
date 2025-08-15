import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  http = inject(HttpClient);

  private destinationsUrl = 'https://689da622ce755fe697896006.mockapi.io/destination/destinations';

  // constructor(private http: HttpClient) { }

  // getDestinations(): Observable<string[]> {
  //   return this.http.get<string[]>(this.destinationsUrl);
  // }

  getDestinations(): Observable<any[]> {
  return this.http.get<any[]>(this.destinationsUrl);
}


}
