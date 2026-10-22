import { Component, inject } from '@angular/core';
import { TaskColumnComponent } from './components/task-column/task-column';
import { TaskFormComponent } from './components/task-form/task-form';
import { Task, TaskStatus } from './models/task.model';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  imports: [TaskColumnComponent, TaskFormComponent],
  templateUrl: './app.html',
})
export class App {
  private readonly taskService = inject(TaskService);

  protected readonly columns: { title: string; status: TaskStatus }[] = [
    { title: 'Para fazer', status: 'todo' },
    { title: 'Em andamento', status: 'doing' },
    { title: 'Concluídas', status: 'done' },
  ];

  protected addTask(task: Omit<Task, 'id' | 'status'>): void {
    this.taskService.addTask(task);
  }

  protected removeTask(id: string): void {
    this.taskService.removeTask(id);
  }

  protected getTasksForColumn(status: TaskStatus): Task[] {
    return this.taskService.getTasksByStatus(status);
  }
}
