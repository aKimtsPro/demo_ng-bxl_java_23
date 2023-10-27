import { Component } from '@angular/core';
import {NumberService} from "../../../services/number.service";

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss'],
  // providers: [NumberService]

})
export class C1Component {

  constructor(
    private readonly $numberServ: NumberService
  ) {}

  get nbr() {
    return this.$numberServ.nbr
  }

}
