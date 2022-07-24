import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public title: string = 'Liaisons - {{ interpolation }}, ( évènement ), [ attribut ]'
  public titleStyle = 'font-style: italic;'

  public activeText: boolean = false
  public showValue(event: MouseEvent) {
    this.activeText = !this.activeText
  }


}
