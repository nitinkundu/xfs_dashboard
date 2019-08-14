import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListteamComponent } from './listteam/listteam.component';
import { AddteamComponent } from './addteam/addteam.component';
 
const routes: Routes = [
  { path: '', component: LoginComponent },
 
  { path: 'main', component: ListteamComponent},
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddteamComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
