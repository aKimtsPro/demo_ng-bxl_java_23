import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrueService {

  constructor() { }

  getTrue(){
    return true;
  }

}
