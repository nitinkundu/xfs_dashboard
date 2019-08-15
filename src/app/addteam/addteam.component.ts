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
 

  // memberName: string;
  // memberNumber: string;
  team: any;
  newTeam:any;
  memberNumber: any;
  memberName: any;
  gitReponame: any;
  gitUsername: any;
  teamName: any;
  constructor(private route: ActivatedRoute, private router: Router, private Service: ServicesService) {
    this.team = new Team();
  
  }
 
    onSubmit() {
      this.newTeam = {
        teamName: this.teamName,
        gitUsername: this.gitUsername,
        gitReponame: this.gitReponame,
        // members: [{
        //   memberName: this.team.memberName,
        //   memberNumber: this.team.memberNumber,
        // }]
        memberName: this.memberName,
        memberNumber: this.memberNumber,
      }
      this.Service.save(this.newTeam).subscribe(result => this.gotoListteam());
      // this.router.navigate(['main']);
    }
   
    gotoListteam() {
      this.router.navigate(['list']);
    }
    
    // addUser()  {
    //   this.Service.save(this.team.memberName).subscribe(result => this.gotoListteam());
    //   this.Service.save(this.team.memberNumber).subscribe(result => this.gotoListteam());
    //   }

  ngOnInit() {

   
  }

}
