import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent {
  @Output() onDivideModeSwitch = new EventEmitter<string>();

  string1 = '÷';
  string2 = '%';
  string3 = '';


  setDivideMode(){
    this.onDivideModeSwitch.emit();
    // Swap strings
    this.string3 = this.string1;
    this.string1 = this.string2;
    this.string2 = this.string3;
  }
}
