import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import Client from '../../interfaces/uncommon/client.interface';
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';


const clients: Client[] = [
    {
        name: 'Francisco',
        gender: 'male',
        age: 30,
        address: '123 Main St',
    },
    {
        name: 'Fernanda',
        gender: 'female',
        age: 25,
        address: '456 Elm St',
    },
];


@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  public client = signal(clients[0])


  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  ChangeClient(): void {
    if(this.client() === clients[0]){
      this.client.set(clients[1])
      return;
    }
    this.client.set(clients[0])
  }

  // plural pipe

  public clientsMap = signal({
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  })

  public clients = signal([
    'maria',
    'jose',
    'alturo',
    'pedro',
    'juan',
    'luis',
    'diego',
    'fernando',
    'perencejo',
    'chimuelo'
  ])

  DeleteClient() {
    this.clients.update((prev) => prev.slice(1))
  }

  profile = {
    name: 'fernando',
    age: 36,
    address: 'Ottawa, Canada',
  }

  // AsyngPipe

  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos infomacion en la promesa');
      console.log('Promesa finalizada')
    }, 3500)
  });


  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('tap:', value))
  )
}
