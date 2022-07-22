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

  
  constructor(public taskservice: TaskServiceService) { }

  ngOnInit(): void {
  }

  

}
