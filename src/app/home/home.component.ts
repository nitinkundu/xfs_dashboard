import { Component, OnInit } from "@angular/core";
import { Dashboard } from "../dashboard";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  dash: Dashboard;

  ngOnInit() {
    console.log(history.state.data);
    this.dash = history.state.data;
  }
}
