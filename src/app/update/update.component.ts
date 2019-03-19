import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Employee } from '../Employee';

@Component({
  selector: 'update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private rS : RestService) { }
  errorMsg : string = "";
  errorMsg1 : string = "";

ngOnInit() {      
}

updateEmployee(id, name, age, salary, designation)
{
  let e1 = new Employee(id, name, age, salary, designation);
  this.rS.putEmployee(id,e1)
  .subscribe
  (
    (response : any)=>console.log("Updated Succesfully"),
    (error) => 
      {
          console.log("Record with id "+id+" does not exists!!!");
      }
  )
}



}

