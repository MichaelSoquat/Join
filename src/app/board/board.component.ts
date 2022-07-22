import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(public taskservice:TaskServiceService) { }

  ngOnInit(): void {
  }

}
