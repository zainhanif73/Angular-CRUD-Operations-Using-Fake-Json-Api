import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username?:string;
  password?:string;
  
  check1? : boolean;
  
  constructor(private router?:Router) { }

  ngOnInit(): void {
    this.check1 = false;
  }
  
  onSubmit(){
    if (this.username === "zain" && this.password==="zain"){
      this.router?.navigateByUrl("/dashboard/student");
      localStorage.setItem("currentUser" , "12345");
    }
    else{
      alert("Wrong Username Or Password");
    }
  }
}
