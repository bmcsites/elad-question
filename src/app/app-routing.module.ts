import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopicsComponent} from "@appRoot/topics/topics.component";
import {AuthComponent} from "@appRoot/login/auth/auth.component";
import {AccountComponent} from "@appRoot/login/account/account.component";

const routes: Routes = [
  {path : '', component : AuthComponent},
  {path : 'login', component : AuthComponent},
  {path : 'account', component : AccountComponent},
  {path: 'topics', component: TopicsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
