import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ServicesService {
  eventList: any[] = [];
  itineraryList: any[] = [];
  dineList: any;
  visitList: any;
  constructor(private http: HttpClient, private router: Router) {}

  // getGoogleDate(): Observable<any> {
  //   return this.http.get("http://localhost:8080/");
  // }

  getData(keyword: string, startDateTime: string, endDateTime: string) {
    this.http.get("http://localhost:8080/restaurants").subscribe(response => {
      console.log(response);
      this.dineList = response;
    });

    this.http.get("http://localhost:8080/visit").subscribe(response => {
      console.log(response);
      this.visitList = response;
      this.router.navigate(["event-results"]);
    });

    this.http
      .get(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=jmMcmgjfpxGx8rV6Z6PsXR5tpOEjuJHt&keyword=${keyword}&size=2&locale=*&startDateTime=${startDateTime}T00:00:00Z&endDateTime=${endDateTime}T23:59:59Z`
      )
      .subscribe(response => {
        this.eventList = response["_embedded"].events;
      });
  }
  addToItinerary(index: number) {
    console.log(index);
    this.itineraryList.push(this.eventList[index]);
    this.router.navigate(["itinerary"]);
    console.log(this.itineraryList);
  }

  returnDineList(): void {
    return this.dineList;
  }
  returnVisitList(): void {
    return this.visitList;
  }
}
