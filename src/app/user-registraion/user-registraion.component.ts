import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registraion',
  templateUrl: './user-registraion.component.html',
  styleUrls: ['./user-registraion.component.css']
})
export class UserRegistraionComponent implements OnInit {

  users: any = [];
  checkIfTrue: boolean = false;

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
  constructor(private router: Router) { }

  ngOnInit(): void {
    debugger;
    var userSave = JSON.parse(localStorage.getItem('user'));
    console.log(userSave);
  }
  onRegister(userinfo: any) {
    var userSave = JSON.parse(localStorage.getItem('user'));
    if (userSave) {
      userSave.forEach((obj, index) => {
        debugger;
        if (obj.username == userinfo.value.username) {
          this.checkIfTrue = true;
          return false;
        }
      });
      if (!this.checkIfTrue) {
        debugger;
        let user = userinfo.value;
        this.checkIfTrue = false;
        this.users = userSave;
        this.users.push(user);
        localStorage.setItem('user', JSON.stringify(this.users));
        this.router.navigateByUrl('login');
      }
      else {
        alert('This user is already exist');
        this.checkIfTrue = false;
      }
    }
    else {
      let user = userinfo.value;
      this.users.push(user);
      localStorage.setItem('user', JSON.stringify(this.users));
      this.router.navigateByUrl('login');
    }

  }
}
