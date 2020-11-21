import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  form = new FormGroup({
    topics: new FormArray([])
  });

  topics1: any = [];

  checkIfTrue: boolean = false;
  editValue: string = '';
  updateCheck: boolean = false;
  updateValue = '';
  setIndex;
  autofocus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // ------------ Add Todo -------------
  addTopic(topic) {

    // variable define
    var itemsArray = this.topics1;
    var currentVal = topic.value;

    // if array length is greater than 0
    if (itemsArray.length > 0) {

      // Check True if Items in Array 
      itemsArray.forEach((item) => {
        if (item.name == currentVal) {
          this.checkIfTrue = true;
        }
      });

      // not push if same element try to push
      if (this.checkIfTrue) {
        alert('please enter unique value');
        this.checkIfTrue = false;
      }

      // push if new element
      else {
        if (!(currentVal == '')) {
          this.topics1.push({
            id: this.topics1.length + 1,
            name: currentVal
          });
          topic.value = "";
          this.checkIfTrue = false;
        }
      }
    }

    // length in null don't push
    else {
      if (!(currentVal == '')) {
        this.topics1.push({
          id: this.topics1.length + 1,
          name: currentVal
        });
        topic.value = "";
      }
    }
  }

  // ---------- Edit Todo ----------
  editPopup(topic) {
    let index = this.topics1.indexOf(topic);
    this.updateCheck = true;
    this.updateValue = topic.name;
    this.setIndex = index;
    this.autofocus = true;
  }

  // --------- Update List --------- 
  update(topic) {
    let index = this.topics1.indexOf(topic);
    this.topics1[this.setIndex] = { id: topic.id, name: topic.value };
    topic.value = "";
    this.updateCheck = false;
  }

  // ---------- Remove Items in Array ---------
  removeTopic(topic) {
    let index = this.topics1.indexOf(topic);
    this.topics1.splice(index, 1);
    this.updateCheck = false;
  };
  
}
