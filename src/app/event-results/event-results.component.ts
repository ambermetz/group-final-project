import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services/services.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-event-results",
  templateUrl: "./event-results.component.html",
  styleUrls: ["./event-results.component.css"]
})
export class EventResultsComponent implements OnInit {
  eventList: any;
  visitList: any;
  dineList: any;
  itineraryList: object;

  constructor(
    private servicesService: ServicesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    // when queryparams change, this will be called again
    this.activatedRoute.queryParams.subscribe(
      ({ keyword, startDateTime, endDateTime }) => {
        this.servicesService
          .getData(keyword, startDateTime, endDateTime)
          .subscribe(([dineList, eventList, visitList]) => {
            this.dineList = dineList;
            this.eventList = eventList._embedded.events;
            this.visitList = Object.values(visitList);
          });
      }
    );
  }

  addToItinerary(event) {
    console.log(event);
    this.itineraryList = this.servicesService.postItinerary(event);
  }
}
