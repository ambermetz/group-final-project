import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services/services.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: "app-event-details",
  templateUrl: "./event-details.component.html",
  styleUrls: ["./event-details.component.css"]
})
export class EventDetailsComponent implements OnInit {
  constructor(    private servicesService: ServicesService, private activatedRoute: ActivatedRoute
    ) {}
    directions: any;
  ngOnInit() {
// this.getDirections()
this.directions= this.servicesService.getDirectionSteps();
console.log(this.directions);
  }

// getDirections(){
// this.activatedRoute.queryParams.subscribe(()=>{
//   this.servicesService.getDirectionSteps().subscribe((directions)=>{
//     this.directions= directions.results
//   });
// });
// }
 }
