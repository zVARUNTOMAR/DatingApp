import { Component, OnInit,Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Member } from 'src/app/_models/Member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-cards',
  templateUrl: './member-cards.component.html',
  styleUrls: ['./member-cards.component.css']
})
export class MemberCardsComponent implements OnInit {

  @Input() member : Member;

  constructor(private membersService:MembersService,private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  addLike(username: string,knownAs:string){
    console.log(username,knownAs);
    this.membersService.addLike(username).subscribe(()=>{
      this.toastr.success("You have Liked " + username);
    })
  }

}
