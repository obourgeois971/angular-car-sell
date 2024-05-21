import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  title = 'CarSell - Welcom !';

  constructor() {
    //
  }

  ngOnInit(): void {
    //
  }

  getTitle(): string {
    return this.title;
  }
}
