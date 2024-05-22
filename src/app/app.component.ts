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

  onClickButton(): void {
    console.log('Hello World');
    this.displayText = this.displayText ? false : true;
  }
}
