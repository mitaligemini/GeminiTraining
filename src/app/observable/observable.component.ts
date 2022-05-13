import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor( private http:HttpClient) { }

  ngOnInit(): void {
    this.myObservable.subscribe((val:any)=>{
      console.log(val);

    },
    // (error)=>{     if here observable throws an errro then observe,complete function will not run.
    //    alert(error);                 
    // },
    ()=>{
      alert("observable complete")
    }
    )
  }
  
  //METHOD -1
  myObservable = new Observable((observer)=>{
    console.log("Observer starts");
    observer.next("1");
    observer.next("2");
    observer.next("3");
    setTimeout(()=>{
      observer.next("4")
    },5000);
    setTimeout(()=>{
      observer.error("something went wrong");
    },6000);
    observer.next("5");
    setTimeout(()=>{
      observer.complete();
    },7000);
    
  }
  )
          // METHOD-2
  //myObservable= Observable.create((observer)=>{  })   works same as above.
  
          
           // METHOD-3
  //arr=[1,2,3,4]
  //myObservable=of(this.arr);  // It takes variable number of inputs.

             // METHOD-4
  //myObservable=from(this.arr); // It also takes varaible number of params and it iterates over the evry 
                                // element of array.

  



}
