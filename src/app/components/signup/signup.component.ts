import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:Router) { }

  errormsg:any;

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    'username':new FormControl('',Validators.required),
    'password':new FormControl('',[Validators.required, Validators.minLength(8)]),
  });

  userSubmit(){
    if(this.userForm.valid){
        Swal.fire(
          'Register success!',
          'Congratulation.',
          'success'
        )
        this.router.navigate(['login']);
      this.service.createData(this.userForm.value).subscribe((res)=>{
        console.log(res,'res=>');
      })
    }else if(this.userForm.invalid){
      Swal.fire(
        'Wrong!',
        'Please enter your username and password again',
        'warning'
      )
    }
  }

  

}
