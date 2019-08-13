import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dashboard } from './dashboard';
import { Observable } from 'rxjs';
import { Team } from './team';

 
@Injectable()
export class ServicesService {
 
  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://ec2-13-233-251-211.ap-south-1.compute.amazonaws.com:8080/Backend_XFS/api/';
  }
 
  public findAll(): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.usersUrl + "xfs");
  }
  
  public save(team: Team) {
    return this.http.post<Team>(this.usersUrl, team);
  }

  public fetchAll(): Observable<Team> {
    return this.http.get<Team>(this.usersUrl);
  }
}
