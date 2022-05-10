import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() data:any;

  childData : boolean= false;
  @Output() childId: EventEmitter<boolean>= new EventEmitter();

  sendDataToParent(){
    this.childId.emit(this.childData)
  }

  viewString:string="hello"
  
  displayValue:string=''
  getValue(val:string){
  
    this.displayValue=val;

  }
  constructor() { }


  ngOnInit(): void {
  }

}
