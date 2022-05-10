import { DetailsComponent } from './../details/details.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  @ViewChild(DetailsComponent) children: DetailsComponent | undefined;

  studentDetails={
    email:'',
    name:''
  }
  saveDetails(){
    console.log(this.studentDetails);
  }



  hide:boolean=true
  receiveEvent(event:any){
    this.hide=event;
    console.log(this.children?.viewString)

  }

}
