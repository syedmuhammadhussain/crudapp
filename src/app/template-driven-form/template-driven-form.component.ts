import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  constructor(public dialog: MatDialog) { }

  @ViewChild('csform') form: any;

  contactMethods: any = [
    { id: 1, name: "Mail" },
    { id: 2, name: "Phone" },
  ];

  ctitles = [
    { value: '1', name: 'Internee Level' },
    { value: '2', name: 'Junior Level' },
    { value: '3', name: 'Mid Level' },
    { value: '4', name: 'Senior Level' }
  ];

  Gender = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' }
  ];

  positions = [
    { value: '1', name: 'Front End Developer' },
    { value: '2', name: 'Designer' },
    { value: '3', name: 'QA' }
  ];

  log(x) {
    console.log(x);

    // var code = ($event.keyCode ? $event.keyCode : $event.which);
    // if (code == 13) {
    // }

  }
  onSubmit(x) {
    this.form.resetForm({});
    this.dialog.open(DialogElementsExampleDialog);
    console.log(x)
    
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog { }
