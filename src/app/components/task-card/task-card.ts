import { Component, input, output } from '@angular/core';
import { LEVELS, Task } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.html',
})
export class TaskCardComponent {
  readonly task = input.required<Task>();
  readonly delete = output<string>();

  protected levelLabel(): string {
    return LEVELS[this.task().level];
  }

  protected dueColor(): string {
    const days = (new Date(this.task().due).getTime() - Date.now()) / 86_400_000;
    if (days < 0) return 'bg-gray-500';
    if (days <= 1) return 'bg-red-500';
    if (days <= 3) return 'bg-orange-400';
    if (days <= 7) return 'bg-yellow-300';
    return 'bg-green-400';
  }
}
