import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './app-tasks/tasks.component';
import { CardComponent } from './shared/card/card.component';
import { TaskComponent } from './app-tasks/task/task.component';
import { NewTaskComponent } from './app-tasks/new-task/new-task.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    UserComponent, 
    CardComponent, 
    TasksComponent, 
    TaskComponent, 
    NewTaskComponent],
  imports: [CommonModule, BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
