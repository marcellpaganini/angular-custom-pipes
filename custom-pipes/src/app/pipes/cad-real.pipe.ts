import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cadReal'
})
export class CadRealPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [price] = args;
    return value * price;
  }

}
