import { Component } from '@angular/core';
import {SumService} from "../../../services/sum.service";

@Component({
  selector: 'app-obs-add',
  templateUrl: './obs-add.component.html',
  styleUrls: ['./obs-add.component.scss']
})
export class ObsAddComponent {

  number: number = 0;

  constructor(private readonly $sumServ:SumService) {
  }

  add(){
    this.$sumServ.add( this.number );
  }

}
