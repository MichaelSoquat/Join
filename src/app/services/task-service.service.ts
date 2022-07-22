import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../modules/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  allTasks: Task[] = [];
  constructor() { }

  addTaskToBacklog(f: NgForm) {
    console.log(f);
    let newTask = new Task(f.value);
    this.allTasks.push(newTask);
    f.reset();
    console.log(this.allTasks)
  }
}
