import { Component } from '@angular/core';

import { Todo } from './todo';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  // animations: [
  //   // the fade-in/fade-out animation.
  //   trigger('simpleFadeAnimation', [
  //     // the "in" style determines the "resting" state of the element when it is visible.
  //     state('in', style({ opacity: 1 })),

  //     // fade in when created. this could also be written as transition('void => *')
  //     transition(':enter', [style({ opacity: 0 }), animate(200)]),

  //     // fade out when destroyed. this could also be written as transition('void => *')
  //     transition(':leave', animate(400, style({ opacity: 0 }))),
  //   ]),
  // ],
})
export class AppComponent {
  title = 'Project CC';

  todoValue: string = '';
  list: Todo[] = [];

  ngOnInit() {
    this.list = [];
    this.todoValue = '';
  }

  addItem() {
    if (this.todoValue !== '') {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false,
      };
      this.list.push(newItem);
    }
    this.todoValue = '';
  }

  deleteItem(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }
}
