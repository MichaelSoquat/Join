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

  getAllTasksFromServer() {
    try {
      let response = this.http.get('http://127.0.0.1:8000/tasks/')
      console.log(response)
      response.subscribe((tasks) => {
        console.log('sub task', tasks)
        this.saveTasksInAllTasks(tasks);
      })

    }
    catch (e) {
      console.log(e)
    }
  }

  saveTasksInAllTasks(tasks: any) {
    this.allTasks = tasks;
    console.log(this.allTasks)
  }

  moveToBoard(id: number) {
    console.log(this.allTasks)
    let filteredTask = this.allTasks.filter((task) => {
      return task.id == id;
    })
    console.log(filteredTask)
    this.saveInDataBase(filteredTask, id);
  }

  saveInDataBase(task: Object, id: number) {
    try {
      let fd = new FormData();
      fd.append("category", "Test of Angular")
      fd.append("description", "Angular Test important")
      fd.append("dueDate", "2022-07-23")
      fd.append("title", "Test Todo")
      fd.append("urgency", "high")
      fd.append("status", "todo")
      let request = this.http.put("http://127.0.0.1:8000/tasks/1/", fd)

      request.subscribe((data) => {
        console.log(data)
      })
    }
    catch (e) {
      console.log(e)
    }
  }
}
