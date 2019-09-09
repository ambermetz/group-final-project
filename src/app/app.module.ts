import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { EventResultsComponent } from "./event-results/event-results.component";
import { SearchComponent } from "./search/search.component";
import { ItineraryComponent } from "./itinerary/itinerary.component";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { AccountComponent } from "./account/account.component";

const appRoutes: Routes = [
  { path: "event-results", component: EventResultsComponent },
  { path: "search", component: SearchComponent },
  { path: "itinerary", component: ItineraryComponent },
  { path: "event-details", component: EventDetailsComponent },
  { path: "account", component: AccountComponent },
  { path: "", redirectTo: "/search", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    EventResultsComponent,
    SearchComponent,
    ItineraryComponent,
    EventDetailsComponent,
    AccountComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
