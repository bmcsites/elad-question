import {Component, OnInit} from '@angular/core';
import {AppProperties} from "@shared/intrefaces/app-properties";
import {AppService} from "@appRoot/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  appProperties!: AppProperties;

  constructor(private  appService: AppService) {}

  ngOnInit(): void {
    this.appProperties = this.appService.getAppProperties();
  }
}
