import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  title = 'Template driven forms';
  name:string | undefined;
  college:string | undefined;
  constructor() {
  }
  

  ngOnInit(): void {
  }
  
  onSubmit(myForm:any) {
    if(myForm.form.status=='INVALID'){
      
      alert('All fields are required');
    }
    else{
      alert('form submitted')
      console.log(myForm.value);
      localStorage.setItem('name',myForm.value.name);
      localStorage.setItem('college',myForm.value.college);
      localStorage.setItem('cgpa',myForm.value.cgpa);
      localStorage.setItem('joining',myForm.value.joiningDate);
      localStorage.setItem('graduate',myForm.value.gdate);
      localStorage.setItem('skills',myForm.value.skills);
      localStorage.setItem('file',myForm.value.file);
      this.addDetailsToTable();
      myForm.reset();
    }

  }
  counter=1;
  addDetailsToTable = () => {
    var table = document.getElementById("table-body");
    let data = document.createElement("tr");
   
    data.innerHTML = `<tr>
      <td>${this.counter}</td>
      <td>${localStorage.getItem("name")}</td>
      <td>${localStorage.getItem("college")}</td>
      <td>${localStorage.getItem("cgpa")}</td>
      <td>${localStorage.getItem("joining")}</td>
      <td>${localStorage.getItem("graduate")}</td>
      <td>${localStorage.getItem("skills")}</td>
      <td>${localStorage.getItem("file")}</td>
    </tr>`;
    table!.append(data);
    this.counter++;
  };

 

}
