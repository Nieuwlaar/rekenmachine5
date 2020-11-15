import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'rekenmachine3';
  displayTopText = '';
  displayBottomText = 0;
  answer = 0;
  keyInput: string;
  answerGiven = false;
  divideMode = true;

  onComputingAnswer(){
    // Preparing string for eval()
    const stringReadyForEval  = this.displayTopText.replace(/÷/g, "/")
                                  .replace(/×/g, "*")
                                  .replace(/%/g, "*0.01")
                                  .replace(/ANS/g, this.answer.toString());
    // Calculating answer
    this.answer = eval(stringReadyForEval);
    this.displayBottomText = this.answer;
    this.answerGiven = true;
  }

  onAdd2DisplayTop(keyInput: string){
    if (this.answerGiven === true){
      this.displayTopText = 'ANS';
      this.answerGiven = false;
    }
    this.displayTopText = this.displayTopText+keyInput;
  }

  onCorrection2DisplayTop(correction: string){
    if ( correction === 'AC'){
      this.displayTopText = '';
      this.answerGiven = false;
      this.answer = 0;
      this.displayBottomText = 0;
    }
    else if ( correction === 'C'){
      this.answerGiven = false;
      this.displayTopText = '';
    }
    else if ( correction === '←'){
      this.displayTopText = this.displayTopText.slice(0, -1);
    }
    else {
      console.log('POSSIBLE INVALID INPUT onCorrection2DisplayTop()');
    }
  }

  onDivideModeSwitch(){
    this.divideMode = !this.divideMode;
  }
}
