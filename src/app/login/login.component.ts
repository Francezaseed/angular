import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:ApiserviceService,private fb:FormBuilder,private router:Router) { }
  readData:any;
  login:any = FormGroup;
  users:any = [];

  ngOnInit(): void {

    this.login = this.fb.group({
      'username':['',Validators.required],
      'password':['',Validators.required]
    })

    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
    });
  }

  loginSubmit(data:any){
    if(data.username){
      this.readData.forEach((item:any) => {
        if(item.username === data.username && item.password === data.password){
          localStorage.setItem("isLoggedIn","true");
          Swal.fire(
            'Login success!',
            'Hello "'+ data.username + '"',
            'success'
          )
          this.router.navigate(['home']);
        }else if(item.username != data.username && item.password != data.password){
          Swal.fire(
            'Login unsuccess!',
            'Please enter you username and password again.',
            'error'
          )
        }
      });
    }
  }

}

