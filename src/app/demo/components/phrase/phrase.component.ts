import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PhraseService} from "../../services/phrase.service";

@Component({
  selector: 'app-phrase',
  templateUrl: './phrase.component.html',
  styleUrls: ['./phrase.component.scss']
})
export class PhraseComponent {

  phrase: string

  constructor(
    route: ActivatedRoute,
    private readonly $phraseServ: PhraseService
  ) {
    const index = parseInt( route.snapshot.params['index'] as string )
    this.phrase = this.$phraseServ.getPhrase(index);
  }

}
