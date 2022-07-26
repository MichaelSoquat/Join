import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../modules/task';
import { TaskServiceService } from '../services/task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {


  constructor(public taskservice: TaskServiceService, private http: HttpClient) { }

  ngOnInit(): void {
  }



  saveTask() {
    //MOVED TO TASK-SERVICE

    //Post request funktioniert mit normalem JS jedoch Fehler mit httpClient; 
    //Nun klappt es. FD muss hier ohne body rein! s. unten

    //   try {
    //     let fd = new FormData();
    //     fd.append("category", "Test of Angular")
    //     fd.append("description", "Angular Test important")
    //     fd.append("dueDate", "2022-07-23")
    //     fd.append("title", "Test Todo")
    //     fd.append("urgency", "high")
    //     fd.append("status", "todo")
    //     let response = await fetch('http://127.0.0.1:8000/tasks/', {
    //       method: 'POST',
    //       body: fd
    //     })
    //     console.log(response)
    //   }


    //   catch (e: any) {
    //     console.log(e)
    //   }
  }

  changeTask() {
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

  deleteTask() {
    try {
      let request = this.http.delete("http://127.0.0.1:8000/tasks/1/");
      request.subscribe((data) => {
        console.log(data)
      })
    }
    catch (e) {
      console.log(e)
    }
  }




}
