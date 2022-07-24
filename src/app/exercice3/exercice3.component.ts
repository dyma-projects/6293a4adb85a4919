import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public status: boolean = true
  public switchText() {
    this.status = !this.status
    console.log(this.status);

  }

  public p1: string = "P1: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga similique earum voluptatum ex deserunt illo consequuntur dignissimos, quidem exercitationem tenetur, minus cumque quia sequi et, natus aspernatur maxime unde ea."

  public p2: string = "P2: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, reiciendis quos laborum doloremque explicabo necessitatibus optio delectus quam quisquam nobis, asperiores distinctio consectetur fuga perferendis corporis aut impedit illum dolorum!"
}
