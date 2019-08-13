import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListteamComponent } from './listteam/listteam.component';
 
const routes: Routes = [
//   { path: 'login', component: LoginComponent },
  // { path: '', component: LoginComponent },
 
  { path: '', component: ListteamComponent},
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
