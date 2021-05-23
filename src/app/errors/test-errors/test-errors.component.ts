import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {

  baseUrl = "https://localhost:44326/api/buggy";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  get404(){
    return this.http.get(this.baseUrl+"/not-found").subscribe(res=>{
      console.log(res)
    },error=>{
      console.log(error);
    });
  }
  get401(){
    return this.http.get(this.baseUrl+"/auth").subscribe(res=>{
      console.log(res)
    },error=>{
      console.log(error);
    });
  }
  get400(){
    return this.http.get(this.baseUrl+"/bad-request").subscribe(res=>{
      console.log(res)
    },error=>{
      console.log(error);
    });
  }
  get500(){
    return this.http.get(this.baseUrl+"/server-error").subscribe(res=>{
      console.log(res)
    },error=>{
      console.log(error);
    });
  }
}
