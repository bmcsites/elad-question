import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SafePipe} from "@shared/pipes/safe.pipe";
import {AppModalComponent} from "@shared/app-modal/app-modal.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HighlightDirective} from "@shared/directives/highlight.directive";
import {HeaderComponent} from "@appRoot/layout/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    AppModalComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [HighlightDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
