import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Class} from '../my-class';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  classes: Class[] = [];
  isAddMode: boolean = false;

  constructor() { }

  ngOnInit() {
    const localStorageRef = localStorage.getItem("classes");
    if(localStorageRef) {
        this.classes = JSON.parse(localStorageRef)
    }
  }

  deleteClass = (classItem: Class): void => {
    var index:number = this.classes.indexOf(classItem);
    if (index > -1) {
      this.classes.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  addClassClick = (): void => {
    var newClass: Class = {
      topic: "",
      date: "",
      lecturer: ""
    }
    this.classes.push(newClass);
    this.updateLocalStorage();
  }

  updateFromChild = (nextData,prevData) => {
    var index:number = this.classes.indexOf(prevData);
    if (index > -1) {
      this.classes[index] = nextData;
      this.updateLocalStorage();
    }
  }

  updateLocalStorage = () => {
    localStorage.setItem('classes', JSON.stringify(this.classes));
  }
}
