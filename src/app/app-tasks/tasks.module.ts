import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TasksComponent, 
    TaskComponent, 
    NewTaskComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    SharedModule,
    DatePipe
  ],
  exports: [
    TasksComponent
  ]
}) 
export class TasksModule { }
