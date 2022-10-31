import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  private baseUrl = "http://localhost:8080/user/";


  public getAllUser():Observable<User[]>
  {
    return this._http.get<User[]>(`${this.baseUrl}view_user`);
  }

  public deleteUser(userId:number)
  {
    return this._http.delete(`${this.baseUrl}del_user/${userId}`);
  }


  public addUser(userRecord: User):Observable<User>
  {
    return this._http.post<User>(`${this.baseUrl}add_user`, userRecord);
  }


// this is used to in case we are not using Observable type 
//BTW this is used to specify ehat type of data we are returning
// in this case we use :any in the .ts file of view-User component

  // public getAllUser()
  // {
  //   return this._http.get(`${this.baseUrl}view_User`);
  // }


// get the User ID
public getUserById(userId:number):Observable<User>
{
  return this._http.get<User>(`${this.baseUrl}view_user/${userId}`);

}



//update User by id

public updateUserById(userId:number, user:User):Observable<User>
{
return this._http.put<User>(`${this.baseUrl}update_user/${userId}`, user);
}


//checking Login Function
public checkLogin(email1:string, password1:string):Observable<User>
{
  let httpParams = new HttpParams();    // this httpParams is used to multiple parameters at once
  httpParams = httpParams.append('email',email1);
  httpParams = httpParams.append('password',password1);

  return this._http.get<User>(`${this.baseUrl}login`, {params: httpParams});
}

}






