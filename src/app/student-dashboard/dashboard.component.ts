import { Component, OnInit } from '@angular/core';
import { studentInterface } from '../student';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  name?: string = ''
  username?: string = ''
  email?: string = ''
  age?: number = 0
  fname?: string = ''
  id: number
  students?: studentInterface[];
  bool = false
  index?: number = 0;

  constructor(private http: HttpClient) {
    this.students = []
    this.id = 0
    this.getStudents();
  }

  getStudents() {
    this.http?.get<any[]>("http://localhost:3000/users")
      .subscribe((data) => {
        this.students = data
      })
  }

  onSubmit(index?: any) {
    if (this.bool) {
      console.log(index);
      if (index != null) {
        this.http.put("http://localhost:3000/users/" + index , 
        { id: this.id, name: this.name, username: this.username, email: this.email, age: this.age, fname: this.fname })
        .subscribe(res=>console.log("Data Successfully Updated")) 
        this.bool = false
      }
    } else {
      this.http.post("http://localhost:3000/users",
      { id: this.id, name: this.name, username: this.username, email: this.email, age: this.age, fname: this.fname })
      .subscribe(res => console.log(res))
      this.id = this.id + 1
    }
    this.getStudents();
  }

  onEdit(student: studentInterface) {

    this.index = Number(this.students?.indexOf(student));
    console.log(this.index);
    if (this.students?.[this.index]) {
      this.age = this.students?.[this.index].age;
      this.email = this.students?.[this.index].email;
      this.username = this.students?.[this.index].username;
      this.fname = this.students?.[this.index].fname;
      this.name = this.students?.[this.index].name;
      this.bool = true;
    }
    this.index = student.id
  }

  onDelete(student?: any) {
    this.http.delete("http://localhost:3000/users/" + student)
      .subscribe(response => console.log(response));
    this.getStudents();
  }

  addBtn() {
    this.name = ''
    this.username = ''
    this.email = ''
    this.age = 0
    this.fname = ''
    this.id = 0
  }
}
