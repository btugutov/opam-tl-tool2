import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PamNewReviewComponent } from './pam-new-review/pam-new-review.component';
import { PamTicketDivesComponent } from './pam-ticket-dives/pam-ticket-dives.component';
import { PamHistoryComponent } from './pam-history/pam-history.component';
import { ConnectorService } from './connector.service';

@NgModule({
  declarations: [
    AppComponent,
    PamNewReviewComponent,
    PamTicketDivesComponent,
    PamHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ConnectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
