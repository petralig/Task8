import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SetupComponent } from './setup/setup.component';
import { RoutesComponent } from './routes/routes.component';
import {RouterModule} from "@angular/router";
import {DigitransitService} from "./services/digitransit.service";
import { SafePipe } from './pipes/safe.pipe';
import { LOCALE_ID } from '@angular/core';
import { SulkeetPipe } from './pipes/sulkeet.pipe';

const routeConfig = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/routes'
  },
  {
    path: 'routes',
    component: RoutesComponent
  },
  {
    path: 'setup',
    component: SetupComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SetupComponent,
    RoutesComponent,
    SafePipe,
    SulkeetPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [DigitransitService, { provide: LOCALE_ID, useValue: "fi-FI" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
