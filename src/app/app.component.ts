import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'DatingApp';
  users:any;

  ngOnInit() : void {
    this.getUsers();
  }

  getUsers(){
    this.http.get("https://localhost:44326/api/Users").subscribe(res =>{
      this.users = res;
    },error=> {
      console.log(error);
    });
  }
  constructor(private http:HttpClient){

  }
}
