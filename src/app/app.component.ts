import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //constructor(private router: Router) {}
  title = 'EmployeeJson';
  errorMsg :string = "";
  disp : boolean = true;
  dispH : boolean = false;
  login(u, p)
  {
    if(u==p)
    {
      //this.router.navigate(['home']);
      this.disp = false;
      this.dispH = true;
    }
    else
    {
      this.errorMsg = "Username and password are incorrect!!";
      this.disp = true;
      this.dispH = false;
    }
  }

}
