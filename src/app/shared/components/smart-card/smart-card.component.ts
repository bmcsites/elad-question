import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-smart-card',
  templateUrl: './smart-card.component.html',
  styleUrls: ['./smart-card.component.scss']
})

export class SmartCardComponent implements OnInit {

  @Input() topic!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
