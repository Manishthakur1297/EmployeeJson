import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private rS : RestService) { }

  ngOnInit() {
  }

  delEmployee(id)
  {
    return this.rS.deleteEmployee(id)
    .subscribe
    (
      (response : any)=>(console.log("Deleted "+id+" Record Successfully...")),
      (error)=> console.log("Record "+id+" doesn't exist.....")
    )
  }


}
