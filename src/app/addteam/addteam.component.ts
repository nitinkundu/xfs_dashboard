import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Team } from "../team";
import { ServicesService } from "../services.service";

@Component({
  selector: "app-addteam",
  templateUrl: "./addteam.component.html",
  styleUrls: ["./addteam.component.css"]
})
export class AddteamComponent implements OnInit {
  // memberName: string;
  // memberNumber: string;
  teamName: any;
  gitUserName: any;
  gitRepoName: any;
  member_name: any;
  member_no: any;

  team: any;
  newTeam: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private Service: ServicesService
  ) {
    this.team = new Team();
  }

  onSubmit() {
    this.newTeam = {
      teamName: this.teamName,
      gitUserName: this.gitUserName,
      gitRepoName: this.gitRepoName,
      member: [
        {
          member_name: this.member_name,
          member_no: this.member_no
        }
      ]
    };
    console.log(this.newTeam);
    this.Service.save(this.newTeam).subscribe(result => this.gotoListteam());
    // this.router.navigate(['main']);
  }

  gotoListteam() {
    this.router.navigate(["list"]);
  }

  // addUser()  {
  //   this.Service.save(this.team.memberName).subscribe(result => this.gotoListteam());
  //   this.Service.save(this.team.memberNumber).subscribe(result => this.gotoListteam());
  //   }

  ngOnInit() {}
}
