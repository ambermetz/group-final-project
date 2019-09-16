import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, combineLatest } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ServicesService {
  eventList: any[] = [];
  itineraryList: any;
  dineList: any;
  visitList: any;
  date: any;
  constructor(private http: HttpClient) {}

  getData(keyword: string, startDateTime: string): Observable<[any, any, any]> {
    // this.time = startDateTime;
    // that latest value emitted by the observables
    return combineLatest(
      this.getDineData(keyword),
      this.getEventData(keyword, startDateTime),
      this.getVisitData(keyword)
    );
  }

  setDate(date) {
    console.log(date);
    this.date = date;
  }

  getDineData(keyword: string) {
    return this.http.get("http://localhost:8080/restaurants", {
      params: { location: keyword }
    });
  }

  getEventData(keyword: string, startDateTime: string) {
    return this.http.get(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=jmMcmgjfpxGx8rV6Z6PsXR5tpOEjuJHt&keyword=${keyword}&size=3&radius=25&locale=*&startDateTime=${startDateTime}T00:00:00Z&T23:59:59Z`
    );
  }

  getVisitData(keyword: string) {
    return this.http.get("http://localhost:8080/visit", {
      params: { location: keyword }
    });
  }

  getItinerary(): Observable<any> {
    return this.http.get("http://localhost:8080/Itinerary");
  }

  postItinerary(item: any) {
    item.startdatetime = this.date;
    return this.http
      .post("http://localhost:8080/Itinerary", item)
      .subscribe(response => {
        this.itineraryList = response;
      });
  }
}
