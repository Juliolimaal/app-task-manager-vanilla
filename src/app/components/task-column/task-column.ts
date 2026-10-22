import { Component, input, output } from '@angular/core';
import { Task, TaskStatus } from '../../models/task.model';
import { TaskCardComponent } from '../task-card/task-card';

@Component({
  selector: 'app-task-column',
  imports: [TaskCardComponent],
  templateUrl: './task-column.html',
})
export class TaskColumnComponent {
  readonly title = input.required<string>();
  readonly status = input.required<TaskStatus>();
  readonly tasks = input.required<Task[]>();
  readonly delete = output<string>();
}
