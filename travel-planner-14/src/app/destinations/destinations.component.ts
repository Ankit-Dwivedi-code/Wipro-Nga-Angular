import { Component, inject, OnInit } from '@angular/core';
import { DestinationService } from '../Service/destination.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
  private destinationService = inject(DestinationService);
  destinations: any[] = [];

  // constructor(private destinationService: DestinationService) { }

  ngOnInit(): void {
    // this.destinationService.getDestinations().subscribe(destinations => {
    //   this.destinations = destinations;
    // });

    this.destinationService.getDestinations().subscribe(data => {
      this.destinations = data;
    });
  }

}
