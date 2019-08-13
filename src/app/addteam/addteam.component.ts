import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css']
})
export class AddteamComponent implements OnInit {

  constructor(private router:Router) { }

  navigate(){
    //do your any operations
    this.router.navigate(['main']);
    }

  ngOnInit() {
  }

}
