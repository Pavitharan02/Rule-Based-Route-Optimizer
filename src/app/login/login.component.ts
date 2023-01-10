import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: any;
  password: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
      if(this.username=="abc@gmail.com" && this.password=="1234"){
          this.router.navigate(['/outletuser']);
      }
      if(this.username=="xyz@gmail.com" && this.password=="5678"){
        this.router.navigate(['/warehouseuser']);
    }
  }
}
