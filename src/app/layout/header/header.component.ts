import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  links: any[];

  constructor(public route: ActivatedRoute) {
    this.links = [
      { title: 'home', fragment: '/' },
      { title: 'directive', fragment: '/directive' },
      { title: 'pipe', fragment: '/pipe' },
      { title: 'tab', fragment: '/tab' },
      { title: 'test', fragment: '/test' },
      { title: 'users', fragment: '/users' }
    ];
  }
}
