import { Component, OnInit } from "@angular/core";
import { Dashboard } from "../dashboard";
import { ActivatedRoute,Router, NavigationExtras } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  dash: Dashboard;
  
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(history.state.data);
    this.dash = history.state.data;
  }
  onSubmit() {
    this.router.navigate(['list']);
  }
}
