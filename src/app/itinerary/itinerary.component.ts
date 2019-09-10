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
    this.itineraryList = this.servicesService.itineraryList;
  }
}
