import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent {
  @Output() onDivideModeSwitch = new EventEmitter<string>();

  stringDivide = '÷';
  stringPercentage = '%';
  divideMode = true;

  setDivideMode(){
    this.onDivideModeSwitch.emit();
    this.divideMode = !this.divideMode;
  }
}
