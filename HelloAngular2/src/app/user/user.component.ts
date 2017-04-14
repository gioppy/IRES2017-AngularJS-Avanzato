import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  template: `
    <h2 class="app-user-title">User Component</h2>
    <p>{{ name }}</p>
    <app-widget [name]="name" [user]="user" (onTryMe)="tryMe($event)"></app-widget>
    <ul>
      <li *ngFor="let user of users; let i = index; let f = first" (click)="sayHello(user)">
        {{ i }} - {{ user.firstname }} {{ user.lastname }}
        <span *ngIf="f; else notFistElement">First element</span>
        <ng-template #notFistElement><span>Not first element</span></ng-template>
      </li>
    </ul>
  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name: string = 'Pippo';
  user: User = new User('Pippo', 'Pluto', 10);

  users: User[] = [
    new User('Pippo', 'Pluto', 10),
    new User('Pippo 2', 'Pluto', 10),
    new User('Pippo 3', 'Pluto', 10)
  ];

  sayHello(user: User){
    let ages: number = 0;
    for(let i = 0; i < this.users.length; i++){
      ages += this.users[i].age;
    }
    console.log('Ages:', ages);
    alert(`Hello, ${user.firstname}!`);
  }

  tryMe(text: string) {
    alert(text);
  }
}