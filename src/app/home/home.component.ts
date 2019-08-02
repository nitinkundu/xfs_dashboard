import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Dashboard } from '../dashboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'XFS';

  dash: Dashboard;
 
  constructor(private dashboardService: ServicesService) { }

  ngOnInit() {
    this.dashboardService.findAll().subscribe(data => {
      console.log(data)
      this.dash = data;
    });
  }
}
