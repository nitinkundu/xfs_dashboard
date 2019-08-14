import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Team } from '../team';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-listteam',
  templateUrl: './listteam.component.html',
  styleUrls: ['./listteam.component.css']
})
export class ListteamComponent implements OnInit {

  team : Team;
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
      this.team=data;
    });

    let tName = parseInt(this.route.snapshot.paramMap.get('teamName'));
    this.teamName = tName;
  }

  onSelect(team){
    this.router.navigate(['list', team.teamName]);
  }

}
