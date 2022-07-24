import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public squareActive: boolean = false
  public fireClick() {
    this.squareActive = !this.squareActive
    console.log('Click')
   }

}
