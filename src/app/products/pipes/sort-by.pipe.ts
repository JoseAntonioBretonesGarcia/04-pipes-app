import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy?: keyof Hero, ascending?: boolean): Hero[] {
    console.log(ascending);

    switch (sortBy) {
      case 'name':
        return heroes.sort((a, b) =>
          ascending ? (a.name > b.name ? 1 : -1) : a.name < b.name ? 1 : -1
        );
      case 'canFly':
        return heroes.sort((a, b) =>
          ascending
            ? a.canFly > b.canFly
              ? 1
              : -1
            : a.canFly < b.canFly
            ? 1
            : -1
        );
      case 'color':
        return heroes.sort((a, b) =>
          ascending ? (a.color > b.color ? 1 : -1) : a.color < b.color ? 1 : -1
        );

      default:
        return heroes;
    }

    return null;
  }
}
