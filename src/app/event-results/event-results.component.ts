import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services/services.service";

@Component({
  selector: "app-event-results",
  templateUrl: "./event-results.component.html",
  styleUrls: ["./event-results.component.css"]
})
export class EventResultsComponent implements OnInit {
  eventList: any[];
  visitList: any;
  dineList: any;
  itineraryList: object;

  constructor(private servicesService: ServicesService) {}

  ngOnInit() {
    this.eventList = this.servicesService.eventList;
    this.visitList = Object.values(this.servicesService.visitList);
    this.dineList = this.servicesService.dineList;
    // console.log(this.servicesService.returnDineList());
  }

  // addToItinerary(index: number) {
  //   this.servicesService.addToItinerary(index);
  // }

  addToItinerary(item) {
    console.log(event.target);
    this.itineraryList = this.servicesService.postItinerary(this.itineraryList);
    console.log(this.itineraryList);
  }
}
