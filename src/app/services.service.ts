import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Dashboard } from "./dashboard";
import { Observable } from "rxjs";
import { Team } from "./team";

@Injectable()
export class ServicesService {
  private Url: string;

  constructor(private http: HttpClient) {
    this.Url = "http://ec2-52-66-245-186.ap-south-1.compute.amazonaws.com:8080/XFSAPP/api/";
  }

  public findAll(): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.Url + "teamlist");
  }
<<<<<<< HEAD
 
  public findAll(): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.Url +"teamlist" );
  }
  
=======

>>>>>>> 9e7a395448361decd656780f095361564c272de8
  public save(team: Team) {
    return this.http.post<Team>(this.Url + "addteam", team);
  }

<<<<<<< HEAD
  public fetchAll() { 
    return this.http.get(this.Url +"teamlist");
=======
  public fetchAll() {
    return this.http.get(this.Url + "teamlist");
    // return this.teams;
>>>>>>> 9e7a395448361decd656780f095361564c272de8
  }
}
