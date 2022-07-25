import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {

  constructor(public taskservice:TaskServiceService) { }

  ngOnInit(): void {
    this.taskservice.getAllTasksFromServer();
  }

 

}
