import { Component, EventEmitter, Output, Input, HostListener, OnChanges } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})

export class KeyboardComponent{
  @Output() onAdd2Display1 = new EventEmitter<string>();
  @Output() onCorrection2Display1 = new EventEmitter<string>();
  @Output() onComputingAnswer = new EventEmitter();

  @Input() divideMode: boolean;

  keyInput = '';
  correction = '';
  divideModeDisplay = '÷';

  ngOnChanges() {
    this.setDivideMode(this.divideMode);
  }

  setDivideMode(divideMode: boolean){
    if (divideMode == true) {
      this.divideModeDisplay = '÷';
    }
    else{
      this.divideModeDisplay = '%';
    }
  }

  addDisplay1(input: string){
    this.keyInput = input;
    this.onAdd2Display1.emit(this.keyInput);
  }

  correctionDisplay1(input: string){
    this.correction = input;
    this.onCorrection2Display1.emit(this.correction);
  }

  computeAnswer(){
    this.onComputingAnswer.emit();
  }

  // Keyboard support:
  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const key_number = parseInt(event.key);
    const key = event.key.toLowerCase();
    event.preventDefault();
    if (key === 'backspace') {
      this.correctionDisplay1('B');
    } else if (key === ',' || key === '.') {
      this.correctionDisplay1('.');
    } else if (key_number >= 0 && key_number < 10) {
      this.addDisplay1((key_number).toString());
    } else if (key === '+' || key === '-') {
      this.addDisplay1(key);
    } else if (key === '/'){
      this.addDisplay1('÷');
    } else if (key === '*'){
      this.addDisplay1('×');
    } else if (key === 'enter') {
      this.computeAnswer();
    }        
  }
}
