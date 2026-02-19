import { Component, input } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users = input<User[]>([]);
}
