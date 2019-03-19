import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Employee } from '../Employee';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {


  errorMsg : string = "";
  //e1 : Employee = {"id":0, "name":"", "age" : 0, "salary":80000,"designation":""};
  employees : Employee[] = [];

  constructor(private rS : RestService) { }

  ngOnInit() {
  }

  displayAll()
  {
    this.rS.getAllEmployee()
    .subscribe
    (
      (response : any)=>
      {
        console.log("Put Succesfully");
        this.employees = response;
      },
      (error) => 
        {
            console.log("No Record exists!!!");
        }
    )
  }


}
