import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters=false;
  includeNumbers=false;
  includeSymbols=false;
  password='';
  length=0;

  constructor(){
    this.password='';
  }
  onButtonClick(){
    console.log(`
    About to generate a password with the following:
    Includes letters: ${ this.includeLetters }
    Includes numbers: ${ this.includeNumbers }
    Includes symbols: ${ this.includeSymbols }

    `);

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    let validchars='';
    if(this.includeLetters){
      validchars +=letters;
    }
    if(this.includeNumbers){
      validchars += numbers;
    }
    if(this.includeSymbols){
      validchars += symbols;
    }
    let generatedPassword='';
    for(let i=0;i< this.length;i++){
      const index = Math.floor(Math.random()*validchars.length);
      generatedPassword += validchars[index];
    }
    this.password= generatedPassword;
  }
  onChangeUseLetters(){
    this.includeLetters= !this.includeLetters;
  }
  onChangeUseNumbers(){
    this.includeNumbers= !this.includeNumbers;
  }
  onChangeUseSymbols(){
    this.includeSymbols= !this.includeSymbols;
  }
  onChangeLength(value:string){
    const parsedValue = parseInt(value);
    this.length=0;
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }
}
