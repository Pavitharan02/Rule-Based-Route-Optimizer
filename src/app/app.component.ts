import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'my-first-project';
  loggedInUser: string | null = null;
  loggpass: string | null=null;
  role: String | null=null;
  // role: string | null = null;



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loggedInUser= localStorage.getItem('loggedInUser');
    this.loggpass=localStorage.getItem('loggpass');
     this.role=localStorage.getItem('role');
    // this.role=localStorage.getItem('role');
    // console.log("dg"+this.loggedInUser+"x");

    this.getUsers;
}
  
  
  public users: User[];

  constructor(private userService: UserService){};

  public getUsers(): void{
    this.userService.getUsers().subscribe(
        (response: User[]) => {
          this.users = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
    );
  }


}

