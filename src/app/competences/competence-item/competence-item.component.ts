import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-competence-item',
  templateUrl: './competence-item.component.html',
  styleUrls: ['./competence-item.component.scss']
})
export class CompetenceItemComponent implements OnInit {
  @Input() imgUrl: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
