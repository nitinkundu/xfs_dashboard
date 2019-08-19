import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Dashboard } from '../dashboard';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dash: any;
 
  constructor(private router: Router, private dashboardService: ServicesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dashboardService.fetchAll().subscribe(data => {
      console.log(data)
      this.dash = data;
    });
  }
  onClick() {
    this.router.navigate(['list']);
  }
}
