import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  newTask = '';
  tasks: { title: string; completed: boolean }[] = [];

  addTodo() {

    if (this.newTask.trim() !== '') {

      this.tasks.push({
        title: this.newTask,
        completed: false
      });

      this.newTask = '';
    }
  }

  deleteTodo(index: number) {

    this.tasks.splice(index, 1);

  }
}