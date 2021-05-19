import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  exports:[
    BsDropdownModule,
    ToastrModule
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    })
  ]
})
export class SharedModule { }
