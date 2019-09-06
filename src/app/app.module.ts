import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventResultsComponent } from './event-results/event-results.component';
import { SearchComponent } from './search/search.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { EventDetailsComponent } from './event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EventResultsComponent,
    SearchComponent,
    ItineraryComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
