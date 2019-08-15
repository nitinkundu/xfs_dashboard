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

  public save(team: Team) {
    return this.http.post<Team>(this.Url + "addteam", team);
  }

  public fetchAll() {
    return this.http.get(this.Url + "teamlist");
    // return this.teams;
  }
}
