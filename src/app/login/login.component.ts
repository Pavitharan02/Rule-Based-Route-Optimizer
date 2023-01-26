import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  role: string | null = null;
  data: any;

  message: string="";

  constructor(private service:UserService, private router: Router,private http: HttpClient){}
  ngOnInit(): void {
      
  }
  authenticate(user: any){
    
    this.service.signIn(user).then(response=>{
        
     // console.log(JSON.parse(JSON.stringify(response)).status);
        localStorage.setItem('loggedInUser',user.email);
        localStorage.setItem('loggpass',user.password);
        this.data=JSON.parse(JSON.stringify(response))
        //localStorage.setItem('role',response.data);
        this.message="success";
       
       localStorage.setItem('role',this.data.role);
       
       console.log(localStorage.getItem('role'));
        this.router.navigate(['/outletuserhome']).then(()=>
        {
          window.location.reload();
        });
      
    }).catch(error=>{
      console.log(error);
      this.message="Invalid email or password";
    });
      

 }
      // this.service.signIn(user).then(response=>{

      // })

}
