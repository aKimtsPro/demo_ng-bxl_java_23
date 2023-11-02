import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SumService {

  private _sum = 0;
  private sumSubject$ = new BehaviorSubject<number>(0)

  constructor() { }

  add(number: number){
    if(number < 0){
      this.sumSubject$.error('cant add negative numbers')
    }

    this._sum += number;
    this.sumSubject$.next( this._sum )
  }

  get sum$(): Observable<number>{
    return this.sumSubject$.asObservable();
  }

  get sum(){
    return this._sum;
  }
}
