import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() scroll: boolean = false

  menuToogled: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  toogleMenu(){
    this.menuToogled = !this.menuToogled
  }

}
