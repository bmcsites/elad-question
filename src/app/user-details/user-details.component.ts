import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  quizList: any;
  constructor() {
    this.quizList = [
      {
        topic: 'נושא קצר',
        list: [
          {
            name: 'שאלון ראשון',
            grade: 90
          },
          {
            name: 'שאלון שני',
            grade: 75
          },
          {
            name: 'שאלון שלישי',
            grade: 84
          }
        ],
        footer: false
      },
      {
        topic: 'נושא מיוחד 3 וארוך',
        list: [
          {
            name: 'שאלון ראשון',
            grade: 90
          },
          {
            name: 'שאלון שני',
            grade: 75
          },
          {
            name: 'שאלון שלישי',
            grade: 84
          }
        ],
        footer: false
      }
    ]
  }

  ngOnInit(): void {
  }

}
