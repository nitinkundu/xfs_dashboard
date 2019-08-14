import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../team';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css']
})
export class AddteamComponent implements OnInit {
 

  memberName: string;
  memberNumber: string;
  team: any;
  constructor(private route: ActivatedRoute, private router: Router, private Service: ServicesService) {
    this.team = new Team();
  }
 
    onSubmit() {
      this.Service.save(this.team).subscribe(result => this.gotoListteam());
      // this.router.navigate(['main']);
    }
   
    gotoListteam() {
      this.router.navigate(['main']);
    }
    
    addUser()  {
      this.Service.save(this.team.memberName).subscribe(result => this.gotoListteam());
      this.Service.save(this.team.memberNumber).subscribe(result => this.gotoListteam());
      }

  ngOnInit() {

   
  }

}
