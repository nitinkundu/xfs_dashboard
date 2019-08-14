import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Team } from '../team';
import { ServicesService } from '../services.service';
import { Dashboard } from '../dashboard';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';


@Component({
  selector: 'app-listteam',
  templateUrl: './listteam.component.html',
  styleUrls: ['./listteam.component.css']
})
export class ListteamComponent implements OnInit {

  team : Team;
  dash : Dashboard;
  teams:any;
  obj:any;
  public teamName;
  constructor(private router:Router, private route:ActivatedRoute, private Service: ServicesService) { }

  // navigate(){
  //   this.router.navigate(['home']);
  //   // this.Service.findAll().subscribe(data => {
  //   //   console.log(data);
  //   //   this.team=data;

  //   }
    submit(){
      
      this.router.navigate(['add']);
      }

  ngOnInit() {
    this.Service.fetchAll().subscribe(data => {
      console.log(data);
      this.teams = data;
    });

    let tName = parseInt(this.route.snapshot.paramMap.get('teamName'));
    this.teamName = tName;
  }

  onSelect(team){
    let obj: Dashboard = {
       
        l_commit: this.dash.l_commit,
        bNumber: this.dash.bNumber,
        jobtitle: this.dash.jobtitle,
        buildStatus: this.dash.buildStatus,
        bUrl: this.dash.bUrl,
      };
      this.router.navigate(['list', team.teamName], this.obj);
  }
}
  

