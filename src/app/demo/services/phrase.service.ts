import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhraseService {

  private phrases = [
    "salut",
    "comment ca va?",
    "bien et toi"
  ]

  constructor() { }

  getPhrase(index: number) {
    return this.phrases[index];
  }
}
