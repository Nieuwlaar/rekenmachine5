import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})

export class ScreenComponent {
  @Input() display1Text: string;
  @Input() display2Text: number;
}
