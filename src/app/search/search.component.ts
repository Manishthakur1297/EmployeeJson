import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Employee } from '../Employee';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private rS : RestService) { }
  errorMsg : string = "";
  emp : Employee = {"id":0, "name":"", "age" : 0, "salary":80000,"designation":""};
  ngOnInit() {
  }


  searchEmployee(id)
  {
    this.rS.getEmployee(id)
    .subscribe
    (
      (response : any)=>
      {
        console.log("Search Succesfully "+response)
        this.emp = response;
      },
      (error) => 
        {
            console.log("Record with id "+id+" does not exists!!!");
            this.errorMsg = "Record with id "+id+" does not exists!!!";
        }
    )
  }



}
