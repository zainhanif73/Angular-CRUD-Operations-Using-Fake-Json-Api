import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoutheader',
  templateUrl: './logoutheader.component.html',
  styleUrls: ['./logoutheader.component.css']
})
export class LogoutheaderComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onClick(){
    if (confirm("Are You Sure You Want To Logout")){
      localStorage.clear();
      console.log("This is working");
      this.route.navigateByUrl("/login");
    }
  }

}
