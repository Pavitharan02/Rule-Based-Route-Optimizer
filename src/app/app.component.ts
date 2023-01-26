import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
}