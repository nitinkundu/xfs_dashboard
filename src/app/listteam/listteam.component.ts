import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listteam',
  templateUrl: './listteam.component.html',
  styleUrls: ['./listteam.component.css']
})
export class ListteamComponent implements OnInit {

  constructor(private router:Router) { }

  navigate(){
    //do your any operations
    this.router.navigate(['home']);
    }

  ngOnInit() {
  }

}
