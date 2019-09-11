import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services/services.service";

@Component({
  selector: "app-event-results",
  templateUrl: "./event-results.component.html",
  styleUrls: ["./event-results.component.css"]
})
export class EventResultsComponent implements OnInit {
  eventList: any[];

  constructor(private servicesService: ServicesService) {}

  ngOnInit() {
    this.eventList = this.servicesService.eventList;
    console.log(this.servicesService.returnVisitList());
    console.log(this.servicesService.returnDineList());
  }

  addToItinerary(index: number) {
    this.servicesService.addToItinerary(index);
  }
}
