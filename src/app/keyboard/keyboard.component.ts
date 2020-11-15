import { Component, EventEmitter, Output, Input, HostListener, OnChanges } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})

export class KeyboardComponent implements OnChanges{
  @Output() onAdd2DisplayTop = new EventEmitter<string>();
  @Output() onCorrection2DisplayTop = new EventEmitter<string>();
  @Output() onComputingAnswer = new EventEmitter();

  @Input() divideMode: boolean;

  keyInput = '';
  correction = '';
  divideModeDisplay = '÷';

  ngOnChanges() {
    this.setDivideMode(this.divideMode);
  }

  setDivideMode(divideMode: boolean){
    if (divideMode === true) {
      this.divideModeDisplay = '÷';
    }
    else{
      this.divideModeDisplay = '%';
    }
  }

  addDisplayTop(input: string){
    this.keyInput = input;
    this.onAdd2DisplayTop.emit(this.keyInput);
  }

  correctionDisplayTop(input: string){
    this.correction = input;
    this.onCorrection2DisplayTop.emit(this.correction);
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
      this.correctionDisplayTop('←');
    } else if (key === ',' || key === '.') {
      this.correctionDisplayTop('.');
    } else if (key_number >= 0 && key_number < 10) {
      this.addDisplayTop((key_number).toString());
    } else if (key === '+' || key === '-' || key === '%') {
      this.addDisplayTop(key);
    } else if (key === '/'){
      this.addDisplayTop('÷');
    } else if (key === '*'){
      this.addDisplayTop('×');
    } else if (key === 'enter') {
      this.computeAnswer();
    }        
  }
}
