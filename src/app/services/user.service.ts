import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ENDPOINTS } from '../endpoints/rest.endpoints';
import { Observable } from 'rxjs';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = '';

  constructor(private http:HttpClient) { }
  
  signIn(user: any){
return this.http.post(ENDPOINTS.LOGIN,user).toPromise();
  }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/user/all`);
  }

  public addUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/user/update`,user);
  }
  
  public deleteUser(userId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/user/delete/${userId}`);
  }
}
