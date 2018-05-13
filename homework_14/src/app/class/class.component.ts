import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Class} from '../my-class';
@Component({
  selector: '[app-class]',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  @Input() myClass: Class;
  @Input() index: number;
  @Input() deleteClass: Function;
  @Output() myClassChange :  EventEmitter<Class> = new EventEmitter<Class>();
  editing: boolean;
  edited: Class;

  constructor() { }

  ngOnInit() {
  }

  showEditMode = (): void => {
    this.edited = {...this.myClass};
    this.editing = true;
    
  }

  cancelEditMode = (): void  => {
    this.edited = null;
    this.editing = false;
  }

  saveEditMode = (): void => {
    this.myClass = {...this.edited};
    this.edited = null;
    this.editing = false;
    this.myClassChange.emit(this.myClass);
  }

}
