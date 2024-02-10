import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SafePipe} from "@shared/pipes/safe.pipe";
import {AppModalComponent} from "@shared/components/app-modal/app-modal.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HighlightDirective} from "@shared/directives/highlight.directive";
import {HeaderComponent} from "@appRoot/layout/header/header.component";
import { TopicsComponent } from './topics/topics.component';
import { TopicZoneComponent } from './topics/topic-zone/topic-zone.component';
import {SmartCardComponent} from "@shared/components/smart-card/smart-card.component";
import {SmartTableComponent} from "@shared/components/smart-table/smart-table.component";
import {LocalFakeApiService} from "@shared/services/local-fake-api.service";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "@appRoot/login/login.component";
import {ResetPasswordComponent} from "@appRoot/login/reset-password/reset-password.component";
import {AccountComponent} from "@appRoot/login/account/account.component";
import {AuthComponent} from "@appRoot/login/auth/auth.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    AppModalComponent,
    HeaderComponent,
    SmartCardComponent,
    TopicsComponent,
    LoginComponent,
    ResetPasswordComponent,
    AuthComponent,
    AccountComponent,
    TopicZoneComponent,
    SmartTableComponent,
    HomeComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [HighlightDirective, LocalFakeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
