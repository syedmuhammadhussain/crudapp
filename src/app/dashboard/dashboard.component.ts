import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username: string;

  constructor(private router: Router) { }

  ngOnInit(): void {

    // Login Auth
    var isLoginSave = JSON.parse(localStorage.getItem('isLogin'));
    var userSave = JSON.parse(localStorage.getItem('user'));
    if (!(isLoginSave && userSave)) {
      this.router.navigateByUrl('login');
    }
    else {
      var userSave = JSON.parse(localStorage.getItem('isLoginUser'));
      this.username = userSave.username;
      console.log(this.username);
    }
  }

}

