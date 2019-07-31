import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { User } from './user';
import { Observable } from 'rxjs';

 
@Injectable()
export class UserService {
 
  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://18.188.202.13:8080/ManisaSpringSample/users';
  }
 
  //public findAll(): Observable<User[]> {
   // return this.http.get<User[]>(this.usersUrl);
  }