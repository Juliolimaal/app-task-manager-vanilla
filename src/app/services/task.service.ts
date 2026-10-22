import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly taskList = signal<Task[]>([]);
  readonly tasks = this.taskList.asReadonly();

  addTask(task: Omit<Task, 'id' | 'status'>): void {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      status: 'todo',
    };

    this.taskList.update((tasks) => [...tasks, newTask]);
  }

  removeTask(id: string): void {
    this.taskList.update((tasks) => tasks.filter((task) => task.id !== id));
  }

  getTasksByStatus(status: TaskStatus): Task[] {
    return this.taskList().filter((task) => task.status === status);
  }
}
