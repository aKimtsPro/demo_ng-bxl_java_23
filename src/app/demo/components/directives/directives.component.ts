import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {

  color: string = '#ff0000';
  squareOptions = {
    border: false,
    shadow: false
  }

  showSquare = true;

  colorArray: string[] = []

  addColor(){
    this.colorArray.push( this.color );
  }

}
