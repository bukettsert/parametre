import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';
import { Task } from '../shared/interfaces/task.interface';


@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = { id: 0, type: '', content: '', assignedTo: '', status: 'In Progress' };
  users = ['User 1', 'User 2', 'User 3'];

  ngOnInit(): void {
    this.tasks = [
      { id: 1, type: 'Type 1', content: 'Görev 1 açıklaması', assignedTo: 'User 1', status: 'Süreçte' },
      { id: 2, type: 'Type 2', content: 'Görev 2 açıklaması', assignedTo: 'User 2', status: 'Süreçte' },
      { id: 3, type: 'Type 1', content: 'Görev 3 açıklaması', assignedTo: 'User 3', status: 'Süreçte' },
      { id: 4, type: 'Type 3', content: 'Görev 4 açıklaması', assignedTo: 'User 1', status: 'Süreçte' },
      { id: 5, type: 'Type 2', content: 'Görev 5 açıklaması', assignedTo: 'User 2', status: 'Süreçte' },
      { id: 6, type: 'Type 3', content: 'Görev 6 açıklaması', assignedTo: 'User 3', status: 'Süreçte' }
    ];
  }

  addTask(): void {
    this.tasks.push({
      id: this.tasks.length + 1,
      type: this.newTask.type,
      content: this.newTask.content,
      assignedTo: this.newTask.assignedTo,
      status: 'Süreçte'
    });
    this.newTask = {};
  }

  markCompleted(task: Task) {
    task.status = 'Tamamlandı';
    task.completed = true;
  }
}


@NgModule({
  declarations: [
    TaskManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ChartModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [TaskManagerComponent]
})
export class AppModule { }
