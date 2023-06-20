import { Component, OnInit } from '@angular/core';
import {SupabaseService} from "@shared/services/supabase.service";

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  topics!: any[]
  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit(): void {
    this.supabase.getTopics().then( (data: any) => {
      //this.topics = data;
      console.log(data);
    });
  }

}
