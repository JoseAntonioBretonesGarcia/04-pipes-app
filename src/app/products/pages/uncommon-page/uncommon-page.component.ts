import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Jose Antonio';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = { male: 'invitarlo', female: 'invitarla' };

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18n Plural
  public clients: string[] = [
    'Maria',
    'Jesús',
    'Álvaro',
    'Lucía',
    'Manu',
    'Senén',
    'Daniel',
    'Aida',
  ];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Jose Antonio',
    age: 25,
    address: 'Sevilla',
  };

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 3500);
  });
}
