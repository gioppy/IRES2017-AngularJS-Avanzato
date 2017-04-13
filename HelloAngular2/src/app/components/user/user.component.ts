import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() name: string;
  @Output() onUpdate: EventEmitter<string> = new EventEmitter<string>();
  users: User[] = [];
  isDisabled = true;

  constructor() {
    this.users.push(new User('Pippo', 'Pippo', 10, 'pippo@pippo.com'));
    this.users.push(new User('Pluto', 'Pluto', 20, 'pluto@pippo.com'));
    this.users.push(new User('Paperino', 'Paperino', 1, 'paperino@pippo.com'));
  }

  ngOnInit() {
  }

  handleUpdate() {
    this.onUpdate.emit(this.name);
  }

  alertUser(user: User) {
    console.log(`Hello ${user.firstname}`);
  }

  clickButton() {
    this.isDisabled = !this.isDisabled;
  }

}
