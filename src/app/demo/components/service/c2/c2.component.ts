import { Component } from '@angular/core';
import {NumberService} from "../../../services/number.service";

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss'],
  // providers: [NumberService]
})
export class C2Component {

  constructor(
    private readonly $numberServ: NumberService
  ) {}


  increment() {
    this.$numberServ.increment();
  }

}
