import { Component, OnInit } from '@angular/core';
import {LocalFakeApiService} from "@shared/services/local-fake-api.service";

@Component({
  selector: 'app-topic-zone',
  templateUrl: './topic-zone.component.html',
  styleUrls: ['./topic-zone.component.scss']
})
export class TopicZoneComponent implements OnInit {
  documentationList!: { headers: any[]; items: any[]; };
  videoList: any;
  quizList: any;
  constructor(private localFakeApiService: LocalFakeApiService) {
    this.localFakeApiService.Get('http://localhost:3000/documentationList').subscribe( docs => {
      if(docs) {
        this.documentationList = docs;
      }
    })
    this.localFakeApiService.Get('http://localhost:3000/videoList').subscribe( videos => {
      if(videos) {
        this.videoList = videos;
      }
    })
    this.localFakeApiService.Get('http://localhost:3000/quizList').subscribe( q => {
      if(q) {
        this.quizList = q;
      }
    })
  }

  ngOnInit(): void {
  }

  tableActionEvent(e: any) {
    console.log(e);
  }

}
