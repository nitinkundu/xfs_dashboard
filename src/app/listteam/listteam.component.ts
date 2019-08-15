import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Team } from "../team";
import { ServicesService } from "../services.service";
import { Dashboard } from "../dashboard";

@Component({
  selector: "app-listteam",
  templateUrl: "./listteam.component.html",
  styleUrls: ["./listteam.component.css"]
})
export class ListteamComponent implements OnInit {
  team: Team;
  dash: Dashboard;
  teams: any;
  obj: any;
  public teamName;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private Service: ServicesService
  ) {}

  submit() {
    this.router.navigate(["add"]);
  }

  ngOnInit() {
    this.Service.fetchAll().subscribe(data => {
      console.log(data);
      this.teams = data;
    });

    let tName = parseInt(this.route.snapshot.paramMap.get("teamName"));
    this.teamName = tName;
  }
  // reduk3dvzzic5wusgt3i55msdnxnxmgm3kkzkqpwjzskib3chbuq
  public onSelect(team) {
    console.log(team);
    this.router.navigate(["list", team.teamName], { state: { data: team } });
  }

  // public onSelect(team){
  //   let navigationExtras: NavigationExtras= {
  //       queryParams:{
  //       l_commit: this.dash.l_commit,
  //       bNumber: this.dash.bNumber,
  //       jobtitle: this.dash.jobtitle,
  //       buildStatus: this.dash.buildStatus,
  //       bUrl: this.dash.bUrl,
  //       }
  //     };

  //     this.router.navigate(['list', team.teamName], navigationExtras);

  // }
}
