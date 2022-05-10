import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nabar',
  templateUrl: './nabar.component.html',
  styleUrls: ['./nabar.component.css']
})
export class NabarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit called")
  }

  ngAfterViewInit(): void{
    console.log("ngAfteriewInit called")
  }

  ngOnDestroy(): void{
    console.log("ngOnDestroy called")
  }

  headerStyle={
    color: 'red',
    fontStyle: 'italic',
    backgroundColor:'red',
  }

  message(){
    alert("helllo world");
    this.name="ayush";
    console.log(this.name);
  }

  name:string= "";

}
