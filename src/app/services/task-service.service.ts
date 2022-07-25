import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../modules/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  allTasks: Task[] = [];
  constructor(public http: HttpClient) { }

  addTaskToBacklog(f: NgForm) {
    console.log(f);
    let newTask = new Task(f.value);
    f.reset();
    this.saveNewTaskInBackend(newTask);

  }

  saveNewTaskInBackend(task: Task) {
    try {
      let fd = new FormData();
      fd.append("category", task.category)
      fd.append("description", task.description)
      fd.append("dueDate", task.dueDate)
      fd.append("title", task.title)
      fd.append("urgency", task.urgency)
      fd.append("status", task.status)
      let request = this.http.post("http://127.0.0.1:8000/tasks/", fd)

      request.subscribe((data) => {
        console.log(data)
      })
    }
    catch (e) {
      console.log(e)
    }
  }
}
