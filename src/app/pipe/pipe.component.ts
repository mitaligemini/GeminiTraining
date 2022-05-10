import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() {}

  text : string='BuiLT IN pipe ExaMple';
  number : number= 4.677777778;
  percent: number=0.9;
  amount: number =400;
  date = new Date();
  dob=new Date('1977/09/12');


  ngOnInit(): void {
  }

}
