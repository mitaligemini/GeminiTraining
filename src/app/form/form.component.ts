import { DetailsComponent } from './../details/details.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { utf8Encode } from '@angular/compiler/src/util';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private http:HttpClient) {  }
  name:any= '';
  email:any='';

  ngOnInit(): void {
    this.fetchDataFromServer();
  }
  

  onSubmit(data:any){
    console.log(data);
    const details={name: data.value.name, email:data.value.email};
    console.log(details);
    this.http.post('url of post/employee.json',details ).subscribe((res)=>{
      console.log(res);
    })
  }

  private fetchDataFromServer(){
    this.http.get('url of post/employee.json').pipe() // we can transform the data before subscribe acc to our need
    .subscribe((res)=>{
      console.log(res)
    })
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
