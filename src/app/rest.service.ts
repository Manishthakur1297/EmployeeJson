import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/rx';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class RestService {


  url : string = "http://localhost:3000/employee/";
  constructor(private http : Http) {}

  getEmployee(id) : Observable<any>
    {
      return this.http.get(this.url+id)
      .map((response : any)=>response.json());
    }

    postEmployee(employee:Employee)
    {
      return this.http.post(this.url,employee)
      .map((response : any)=>response)
    }

    deleteEmployee(id)
    {
        return this.http.delete(this.url+id)
        .map((response:any)=>response)
    }

    getAllEmployee()
    {
        return this.http.get(this.url)
        .map((response : Response) => response.json())
    }


    putEmployee(id,e1) : Observable<any>
    {
      return this.http.put(this.url+id,e1)
      .map((response : any)=>response);
    }

    
  }


    // getUser(id) : void
    // {
    //   this.http.get(this.url+id).subscribe(
        
    //     (response:Response)=> console.log(response.json())
    //   )
    // }
