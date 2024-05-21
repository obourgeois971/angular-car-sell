import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  text = '';
  title = 'car-sell';
  paragrapheId = 0;

  onClickButton(): void {
    console.log('Hello World');
    this.text = 'Hello World au clic';
  }
}
