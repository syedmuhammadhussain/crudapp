import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../common/validators/username.validators';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', 
      Validators.required, 
      UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
}
