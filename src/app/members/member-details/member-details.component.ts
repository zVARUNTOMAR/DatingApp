import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Member } from 'src/app/_models/Member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  member : Member;
  galleyOptions : NgxGalleryOptions[];
  galleryImages : NgxGalleryImage[];
  imageUrls : string[];

  constructor(private memberService: MembersService,private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMember();
    
    this.galleyOptions = [{
        width:'500px',
        height : '500px',
        imagePercent : 100,
        thumbnailsColumns:4,
        imageAnimation:NgxGalleryAnimation.Slide,
        preview:false
      }
    ]
  }

  getImages(): NgxGalleryImage[]{
    const ImageUrls=[];
    for(const photo of this.member.photos){
      ImageUrls.push({
        small:photo?.url,
        medium:photo?.url,
        big:photo?.url
      })
    }
    return ImageUrls;
  }

  loadMember(){
    this.memberService.getMember(this.router.snapshot.paramMap.get('username')).subscribe(member =>{
      this.member = member;
      this.galleryImages = this.getImages();
    });
  }

}

