import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './models/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private _http:HttpClient) { }

  private baseUrl = "http://localhost:8080/job/";

  public getAllJob():Observable<Job[]>
  {
    return this._http.get<Job[]>(`${this.baseUrl}view_job`);
  }

  public deleteJob(jobId:number)
  {
    return this._http.delete(`${this.baseUrl}del_job/${jobId}`);
  }


  public addJob(jobRecord: Job):Observable<Job>
  {
    return this._http.post<Job>(`${this.baseUrl}add_job`, jobRecord);
  }

  
  public getJobById(jobId:number):Observable<Job>
  {
    return this._http.get<Job>(`${this.baseUrl}view_job/${jobId}`);

  }



//update User by id

public updateJobById(jobId:number, job:Job):Observable<Job>
{
return this._http.put<Job>(`${this.baseUrl}update_job/${jobId}`, job);
}


}
