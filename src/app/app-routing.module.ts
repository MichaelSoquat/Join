import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { BacklogComponent } from './backlog/backlog.component';
import { BoardComponent } from './board/board.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: 'board', component: BoardComponent },
  { path: 'backlog', component: BacklogComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'help', component: HelpComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
