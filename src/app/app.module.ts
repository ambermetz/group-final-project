import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
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
// initial routing structure, we also have some routing setup in our method in search component, and a button in event results and itinerary pages html routerLink.

@NgModule({
  declarations: [
    AppComponent,
    EventResultsComponent,
    SearchComponent,
    ItineraryComponent,
    EventDetailsComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
