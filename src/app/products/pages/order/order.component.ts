import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public sortBy: keyof Hero = 'name';
  public nameOrder: keyof Hero = 'name';
  public ascendingOrder: boolean = true;
  public canFlyOrder: keyof Hero = 'canFly';
  public colorOrder: keyof Hero = 'color';
  public heroes: Hero[] = [
    { name: 'Superman', canFly: true, color: Color.blue },
    { name: 'Batman', canFly: false, color: Color.black },
    { name: 'Spiderman', canFly: true, color: Color.red },
    { name: 'Daredevil', canFly: false, color: Color.red },
    { name: 'Linterna verde', canFly: true, color: Color.green },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeTableOrder(propertyHero: keyof Hero): void {
    this.sortBy === propertyHero
      ? this.changeAscendingOrder()
      : (this.ascendingOrder = true);
    this.sortBy = propertyHero;
  }

  changeAscendingOrder(): void {
    this.ascendingOrder = !this.ascendingOrder;
  }
}
