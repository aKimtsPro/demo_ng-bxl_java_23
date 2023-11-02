import { Component } from '@angular/core';
import {interval, Observable, of, Subject} from "rxjs";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent {

  cold$: Observable<number> = of(1,5,7,14,2,9); // interval(1000);
  hot$: Subject<number> = new Subject<number>();

  number: number = 0;

  constructor() {
  }

  subscribe(){
    this.hot$.subscribe( {
      next: (info) => console.log(info),
      error: (err) => console.error(err),
      complete: () => console.log('FINISHED')
    })
  }

  emit(){
    // 3 emission possibles:
    // - next: signal transportant des infos envoyées de facon sequencées
    this.hot$.next( this.number )
    // - error: signal d'error, plus de next après
    // this.hot$.error({'err' : 'erreur'})
    // - complete: signal de finition, plus de next après
    // this.hot$.complete();
  }

}
