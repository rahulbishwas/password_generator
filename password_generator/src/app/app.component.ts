import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password_generator';

  password='';
  includeLetters=false;
  includeNumber=false;
  includeSymbols=false;
  length=0;

  onButtonClick(){
    console.log(this.includeSymbols);
    console.log(this.length)
this.password='MY PASSWORD'

  }

  onChangeUseLetters(){

this.includeLetters=!this.includeLetters;

  }
  onChangeUseNumber(){
    this.includeNumber=!this.includeNumber;
  }
  onChangeUseSymbols(){
    this.includeSymbols=!this.includeSymbols;
  }

  onChangeLength(value:string){
    const parseValue=parseInt(value)
// this.length=value;

if(!isNaN(parseValue)){
this.length=parseValue;

}

  }
}
