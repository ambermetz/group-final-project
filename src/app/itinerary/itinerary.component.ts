import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services/services.service";

@Component({
  selector: "app-itinerary",
  templateUrl: "./itinerary.component.html",
  styleUrls: ["./itinerary.component.css"]
})
export class ItineraryComponent implements OnInit {
  itineraryList: any[];
  constructor(private servicesService: ServicesService) {}

  ngOnInit() {
    // this.itineraryList = this.servicesService.itineraryList;
    this.servicesService
      .getItinerary()
      .subscribe(response => (this.itineraryList = response));
    console.log(this.itineraryList);
  }

  deleteItinerary(item: any) {
    console.log(item);
    this.servicesService
      .deleteItinerary(item)
      .subscribe(response => (this.itineraryList = response));
  }
}
