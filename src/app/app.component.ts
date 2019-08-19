import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { Dashboard } from './dashboard';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Extreme Feedback System';

  dash: Dashboard;
 
  constructor(private dashboardService: ServicesService) { }

  ngOnInit() {
    
  }
}
