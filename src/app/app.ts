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

  selectedPriority = 'Medium';

  tasks: {
    title: string;
    completed: boolean;
    priority: string;
    editing: boolean;
  }[] = [];

  editIndex: number | null = null;

  isEditing = false;

  constructor() {

    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {

      this.tasks = JSON.parse(savedTasks);

    }
  }

  addTodo() {

    if (this.newTask.trim() === '') return;

    if (this.isEditing && this.editIndex !== null) {

      this.tasks[this.editIndex].title =
        this.newTask;

      this.tasks[this.editIndex].priority =
        this.selectedPriority;

      this.isEditing = false;

      this.editIndex = null;

    } else {

      this.tasks.push({

        title: this.newTask,

        completed: false,

        priority: this.selectedPriority,

        editing: false

      });

    }

    this.saveTasks();

    this.newTask = '';

    this.selectedPriority = 'Medium';

  }

  editTask(index: number) {

    this.newTask = this.tasks[index].title;

    this.selectedPriority =
      this.tasks[index].priority;

    this.editIndex = index;

    this.isEditing = true;

  }

  completeTask(index: number) {

  this.tasks[index].completed = true;

  this.saveTasks();

}




  deleteTodo(index: number) {

    this.tasks.splice(index, 1);

    this.saveTasks();

  }

  saveTasks() {

    localStorage.setItem(

      'tasks',

      JSON.stringify(this.tasks)

    );

  }

}