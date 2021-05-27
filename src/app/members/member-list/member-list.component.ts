import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/Member';
import { Pagination } from 'src/app/_models/Pagination';
import { User } from 'src/app/_models/user';
import { UserParams } from 'src/app/_models/UserParams';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members : Member[];
  pagination:Pagination;
  userParams : UserParams;
  user : User;
  genderList : any;


  constructor(private membersService:MembersService) {

    this.userParams = this.membersService.getUserParams();

    this.genderList = [{value:'male',display:'Male'},{value:'female',display:'Female'}];
   }

  ngOnInit(): void {
   this.loadMembers();
  }

  loadMembers(){
    this.membersService.setUserParams(this.userParams);
    this.membersService.getMembers(this.userParams).subscribe(response=>{
      this.members = response.result;
      this.pagination = response.pagination;
    })
  }

  pageChanged(event:any){
    this.userParams = event.page;
    this.membersService.setUserParams(this.userParams);
    this.loadMembers();
  }

  resetFilters(){
    this.userParams = this.membersService.resetUserParams();
    this.loadMembers();
  }

}
