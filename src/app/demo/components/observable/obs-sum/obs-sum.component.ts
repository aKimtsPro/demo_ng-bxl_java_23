import { Component } from '@angular/core';
import {SumService} from "../../../services/sum.service";
import {catchError, EMPTY, filter, map, Observable, Subscription, tap} from "rxjs";

@Component({
  selector: 'app-obs-sum',
  templateUrl: './obs-sum.component.html',
  styleUrls: ['./obs-sum.component.scss']
})
export class ObsSumComponent {

  // sum = 0;
  // subscription?: Subscription
  sum$?: Observable<number>;
  error?: string;

  constructor(private readonly $sumServ: SumService) {
    // this.sum = $sumServ.sum; // plus besoin avec un behaviorSubject
  }

  subscribe(){
    // this.subscription = this.$sumServ.sum$.subscribe({
    //   next: (data) => this.sum = data,
    //   error: (err) => console.error(err)
    // })
    this.sum$ = this.$sumServ.sum$.pipe(
      filter(data => data % 2 == 0),
      map( data => data * 2 ),
      tap({
        next: (data) => console.log(data),
        error: (err) => {
          this.error = err;
          console.error(err)
        },
        complete: () => console.log("FINISHED")
      }),
      // catchError((err, caught$) => {
      //   console.error(err);
      //   this.error = err;
      //   return EMPTY;
      // })
    );
  }


}
