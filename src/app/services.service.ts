import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dashboard } from './dashboard';
import { Observable } from 'rxjs';
import { Team } from './team';

 
@Injectable()
export class ServicesService {
 
  private Url: string;
 
  constructor(private http: HttpClient) {
    this.Url = 'http://ec2-52-66-245-186.ap-south-1.compute.amazonaws.com:8080/Backend_XFS/api/teamlist';
  }
 
  public findAll(): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.Url);
  }
  
  public save(team: Team) {
    return this.http.post<Team>(this.Url, +"teamlist");
  }

  public fetchAll(): Observable<Team> {
    return this.http.get<Team>(this.Url);
  }
}
