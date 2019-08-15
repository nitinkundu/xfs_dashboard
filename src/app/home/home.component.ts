import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Dashboard } from '../dashboard';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dash: Dashboard;
  data: any;
 
  constructor(private Service: ServicesService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.dash.l_commit = params["l_commit"];
      this.dash.bNumber = params["bNumber"];
      this.dash.bUrl = params["bUrl"];
      this.dash.buildStatus = params["buildStatus"];
      this.dash.jobtitle = params["jobtitle"];
    });
   }

  ngOnInit(): void {
    this.Service.findAll().subscribe(data => {
      console.log(data)
      this.dash = data;
    });
    this.data = this.Service.data;
        this.Service.data = undefined;

  }
}
