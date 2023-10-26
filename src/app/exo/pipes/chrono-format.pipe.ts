import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chronoFormat'
})
export class ChronoFormatPipe implements PipeTransform {

  transform(value: number): string {
    const min = Math.floor( value / 60 );
    const sec = value % 60;
    return `${ min.toString().padStart(2, '0') } minutes ${sec.toString().padStart(2, '0')} secondes`;
  }

}
