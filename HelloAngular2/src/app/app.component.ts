import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User('Pippo', 'Pluto', 20, 'pippo@pippo.it');
  name: string;

  updateName(text) {
    console.log(text);
    this.name = text;
  }
}