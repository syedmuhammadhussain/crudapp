import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  checkIfTrue: boolean = false;
  textMsg: string;
  textCont: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    var userSave = JSON.parse(localStorage.getItem('user'));
    var isLoginSave = JSON.parse(localStorage.getItem('isLogin'));
    if (isLoginSave) {
      this.router.navigateByUrl('dashboard');
    }
    console.log(userSave);
  }
  onLogin(user: any) {
    var userSave = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    debugger;
    if (userSave) {
      userSave.forEach((obj, index) => {
        if (user.value.username == obj.username && user.value.password == obj.password) {
          this.checkIfTrue = true;
        }
      })
      if (this.checkIfTrue) {
        this.checkIfTrue = false;
        localStorage.setItem('isLogin', JSON.stringify('true'));
        localStorage.setItem('isLoginUser', JSON.stringify(user.value));
        this.router.navigateByUrl('dashboard');
      }
      else {
        var body = document.body;
        body.classList.add("open");
        this.textMsg = "Warning";
        this.textCont = "Please enter correct username and password";
        setTimeout(() => {
          body.classList.remove("open");
        }, 5000);
      }
    }
    else {
      this.textMsg = "Warning";
      this.textCont = "Please Register First";
      var body = document.body;
      body.classList.add("open");
      setTimeout(() => {
        body.classList.remove("open");
      }, 5000);
    }
  }
  close(): void {
    var body = document.body;
    body.classList.remove("open");
  }
}
