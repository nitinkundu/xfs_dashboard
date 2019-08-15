import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Dashboard } from "./dashboard";
import { Observable } from "rxjs";
import { Team } from "./team";

@Injectable()
export class ServicesService {
  private Url: string;

  constructor(private http: HttpClient) {
    this.Url = "http://localhost:8090/api/";
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
