import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  minDate: Date;
  maxDate: Date;
  registerForm : FormGroup;

  constructor(private accountService: AccountService,private toastr:ToastrService,private fb : FormBuilder,
    private router : Router) { 
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setFullYear(this.minDate.getFullYear() - 61);
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18);
  }

  ngOnInit(): void {
      this.initializeForm();
  }

  initializeForm(){
    this.registerForm = this.fb.group({
      gender : ['male'],
      userName : ['',Validators.required],
      knownAs : ['',Validators.required],
      dateOfBirth : ['',Validators.required],
      city : ['',Validators.required],
      country : ['',Validators.required],
      password : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
      confirmPassword : ['',[Validators.required,this.matchValues('password')]]
    })
  }

  matchValues(matchTo : string):ValidatorFn{
    return (control:AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value ? null : {isMatching: true}
    }
  }

  register(){
    this.accountService.register(this.registerForm.value).subscribe(response=>{
      this.toastr.success("Register Successfully!");
      this.router.navigateByUrl('/members');
      this.cancel();
    },err=>{
      this.toastr.error("Something went wrong");
      console.log(err)
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
