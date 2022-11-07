import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplyJob } from './models/apply-job';
import { Observable } from 'rxjs';
import { Job } from './models/job';

@Injectable({
  providedIn: 'root'
})
export class ApplyJobService {

  constructor(private _http:HttpClient) { }

  private baseUrl = "http://localhost:8080/appliedJob/";

  // to  send data to addApplied jo function in backend
public addAppliedJob(jid:number,uid:number):Observable<ApplyJob[]>
{
  return this._http.post<ApplyJob[]>(`${this.baseUrl}${uid}/${jid}`, '');
}



public getAllAppliedJob():Observable<ApplyJob[]>
{
  return this._http.get<ApplyJob[]>(`${this.baseUrl}`);
}


public getAllAppliedJobByUserID(userId: number):Observable<ApplyJob[]>
{
  return this._http.get<ApplyJob[]>(`${this.baseUrl}ap/${userId}`);
}






}
