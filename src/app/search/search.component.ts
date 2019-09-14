import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services/services.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  eventList: any[];
  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) {}

  getData(keyword: any, startDateTime: any, endDateTime: any): void {
    this.router.navigate(["event-results"], {
      queryParams: { keyword, startDateTime, endDateTime }
    });
  }

  ngOnInit() {}
}
