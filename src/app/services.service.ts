import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dashboard } from './dashboard';
import { Observable } from 'rxjs';

 
@Injectable()
export class ServicesService {
 
  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://ec2-13-233-251-211.ap-south-1.compute.amazonaws.com:8080/Backend_XFS/api/xfs';
  }
 
  public findAll(): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.usersUrl);
  }
}
