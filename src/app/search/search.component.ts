import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services/services.service";
// import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  eventList: any[];
  constructor(private servicesService: ServicesService) {}

  getData(keyword: any, startDateTime: any, endDateTime: any): void {
    this.servicesService.getData(keyword, startDateTime, endDateTime);
  }

  ngOnInit() {}
}
