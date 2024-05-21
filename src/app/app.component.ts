import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  text = 'hello';
  title = 'car-sell';

  displayText = false;

  paragrapheId = 0;

  cars = [
    {
      id: 0,
      brand: 'Renault',
      model: 'Laguna',
      color: 'gray',
    },
    {
      id: 1,
      brand: 'Peugeot',
      model: '508',
      color: 'red',
    },
    {
      id: 2,
      brand: 'Opel',
      model: 'Corsa',
      color: 'blue',
    },
  ];

  onClickButton(): void {
    console.log('Hello World');
    this.displayText = this.displayText ? false : true;
  }
}
