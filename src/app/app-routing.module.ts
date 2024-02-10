import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopicsComponent} from "@appRoot/topics/topics.component";
import {TopicZoneComponent} from "@appRoot/topics/topic-zone/topic-zone.component";
import {AccountComponent} from "@appRoot/login/account/account.component";
import {AuthComponent} from "@appRoot/login/auth/auth.component";
import {HomeComponent} from "@appRoot/home/home.component";
import {UserDetailsComponent} from "@appRoot/user-details/user-details.component";

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'login', component : AuthComponent},
  {path: 'account', component : AccountComponent},
  {path: 'module/:id', component: TopicsComponent},
  {path: 'topic/:id', component: TopicZoneComponent},
  {path: 'user/:id', component: UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
