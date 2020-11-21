import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  isActive: boolean = true;
  text: string;
  name: string = '';
  constructor() { }
  onClick(): void {
    this.isActive = !this.isActive;
  }
  

}
