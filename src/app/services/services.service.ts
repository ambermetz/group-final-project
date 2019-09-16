import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ServicesService {
  eventList: any[] = [];
  itineraryList: any;
  dineList: any;
  visitList: any;
  constructor(private http: HttpClient, private router: Router) {}

  getData(keyword: string, startDateTime: string, endDateTime: string) {
    this.http
      .get("http://localhost:3000/restaurants", {
        params: { location: keyword }
      })
      .subscribe(response => {
        console.log(response);
        this.dineList = response;
      });

    this.http
      .get("http://localhost:3000/visit", { params: { location: keyword } })
      .subscribe(response => {
        console.log(response);
        this.visitList = response;
        this.router.navigate(["event-results"]);
      });

    this.http
      .get(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=jmMcmgjfpxGx8rV6Z6PsXR5tpOEjuJHt&keyword=${keyword}&size=3&locale=*&startDateTime=${startDateTime}T00:00:00Z&endDateTime=${endDateTime}T23:59:59Z`
      )
      .subscribe(response => {
        this.eventList = response["_embedded"].events;
      });
  }

  getItinerary(): Observable<any> {
    return this.http.get("http://localhost:3000/Itinerary");
  }

  postItinerary(item: object) {
    console.log(item);
    return this.http
      .post("http://localhost:3000/Itinerary", item)
      .subscribe(response => {
        this.itineraryList = response;
      });
  }

  returnDineList(): void {
    return this.dineList;
  }
  returnVisitList() {
    return this.visitList;
  }
}
