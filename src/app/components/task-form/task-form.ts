import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskLevel } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
})
export class TaskFormComponent {
  readonly submitTask = output<{
    title: string;
    due: string;
    level: TaskLevel;
    desc: string;
  }>();

  protected readonly title = signal('');
  protected readonly due = signal('');
  protected readonly level = signal<TaskLevel>('low');
  protected readonly desc = signal('');

  protected open(dialog: HTMLDialogElement): void {
    dialog.showModal();
  }

  protected submit(dialog: HTMLDialogElement): void {
    if (!this.title().trim() || !this.due()) return;

    this.submitTask.emit({
      title: this.title().trim(),
      due: this.due(),
      level: this.level(),
      desc: this.desc().trim(),
    });

    dialog.close();
  }

  protected resetForm(): void {
    this.title.set('');
    this.due.set('');
    this.level.set('low');
    this.desc.set('');
  }
}
