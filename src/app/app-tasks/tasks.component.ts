import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) selectedUserId!: string;
  @Input({required: true}) selectedUserName!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService){}

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.selectedUserId);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

}
