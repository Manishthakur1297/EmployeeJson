import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Employee } from '../Employee';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private rS : RestService) { }
    errorMsg : string = "";
    errorMsg1 : string = "";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  ngOnInit() {
  }

  createEmployee(id, name, age, salary, designation)
  {
    let e1 = new Employee(id, name, age, salary, designation);
    this.rS.postEmployee(e1)
    .subscribe
    (
      (response : any)=>console.log("Put Succesfully"),
      (error) => 
        {
            console.log("Record with id "+id+" already exists!!!");
            this.errorMsg1 = "Record with id "+id+" already exists!!!";
        }
    )
  }



}
