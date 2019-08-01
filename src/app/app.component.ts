import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { Dashboard } from './dashboard';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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