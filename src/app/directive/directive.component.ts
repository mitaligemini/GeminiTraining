import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  names:string[]=['ajay','ram','shyan','hello','krati']



  addDetails(){
    this.names.push("Zaid")
  }

  removeDetails(i:number){
    this.names.splice(i,1);
  }

  isBlue : boolean = false
  changeColor(){
    this.isBlue=!this.isBlue
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
