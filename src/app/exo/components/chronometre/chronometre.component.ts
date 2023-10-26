import { Component } from '@angular/core';

@Component({
  selector: 'app-chronometre',
  templateUrl: './chronometre.component.html',
  styleUrls: ['./chronometre.component.scss']
})
export class ChronometreComponent {

  secondsPast: number = 0;
  interval?: number;

  play(){
    if( !this.interval )
      this.interval = window.setInterval(() => this.secondsPast++, 1_000)
  }

  pause(){
    if( this.interval ) {
      clearInterval(this.interval)
      this.interval = undefined
    }
  }

  reset() {
    this.secondsPast = 0;
  }

  get isPaused(){
    return !this.interval
  }

}
