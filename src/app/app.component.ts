import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'rekenmachine3';
  constructor() {};
  display1Text = '';
  display2Text = 0;
  answer = 0;
  temp = '';
  keyInput: string;
  answerGiven = false;
  divideMode = true;

  onComputingAnswer(){
    // Preparing string for eval()
    this.temp = this.display1Text;
    this.temp = this.temp.replace(/÷/g, "/");
    this.temp = this.temp.replace(/×/g, "*");
    this.temp = this.temp.replace(/ANS/g, this.answer.toString());
    // Calculating answer
    this.answer = eval(this.temp);
    this.display2Text = this.answer;
    this.answerGiven = true;
  }

  onAdd2Display1(keyInput: string){
    if (this.answerGiven == true){
      this.display1Text = 'ANS';
      this.answerGiven = false;
    }
    this.display1Text = this.display1Text+keyInput;
  }

  onCorrection2Display1(correction: string){
    if ( correction == 'AC'){
      this.display1Text = '';
      this.answerGiven = false;
      this.answer = 0;
      this.display2Text = 0;
    }
    else if ( correction == 'C'){
      this.answerGiven = false;
      this.display1Text = '';
    }
    else if ( correction == 'B'){
      this.display1Text = this.display1Text.slice(0, -1);
    }
    else {
      console.log('POSSIBLE INVALID INPUT onCorrection2Display1()');
    }
  }

  onDivideModeSwitch(){
    this.divideMode = !this.divideMode;
  }
}
