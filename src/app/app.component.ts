import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./app-tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;

  selectedUserName: string = '';
  selectedUserId: string = '';

  onSelectUser(id: string){
      this.selectedUserName = this.users.find(e => e.id == id)?.name!;
      this.selectedUserId = this.users.find(e => e.id == id)?.id!;
  }
}