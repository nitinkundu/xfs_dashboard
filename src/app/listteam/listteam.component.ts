import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../team';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-listteam',
  templateUrl: './listteam.component.html',
  styleUrls: ['./listteam.component.css']
})
export class ListteamComponent implements OnInit {

  team : Team;
  constructor(private router:Router,private Service: ServicesService) { }

  navigate(){
    
    this.router.navigate(['home']);
    

    }
    submit(){
      
      this.router.navigate(['add']);
      }

  ngOnInit() {
    this.Service.fetchAll().subscribe(data => {
      this.team=data;
    });
  }

}
