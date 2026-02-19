import { Component } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { User } from './user.interface';

@Component({
  selector: 'app-ejemplo-uso',
  imports: [UserListComponent],
  template: `
    <h2>Lista de usuarios</h2>
    <app-user-list [users]="usuarios" />
  `,
})
export class EjemploUsoComponent {
  usuarios: User[] = [
    { id: 1, name: 'Ana García', age: 28 },
    { id: 2, name: 'Carlos López', age: 35 },
    { id: 3, name: 'María Fernández', age: 42 },
  ];
}
