import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ServicesService } from "../services/services.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  eventList: any[];
  constructor(private router: Router, private service: ServicesService) {}

  getData(form: NgForm): void {
    this.service.setDate(form.value.startDateTime);
    this.router.navigate(["event-results"], {
      queryParams: {
        keyword: form.value.keyword,
        startDateTime: form.value.startDateTime
      }
    });
  }

  ngOnInit() {}
}
