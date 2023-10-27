import { Injectable } from '@angular/core';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class NumberService {

  private _nbr = 10;

  constructor() { }

  increment(){
    this._nbr++;
  }

  get nbr(): number {
    return this._nbr;
  }
}
