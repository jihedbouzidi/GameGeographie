import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { ContinentsComponent } from './continents/continents.component';
import { AsiaComponent } from './asia/asia.component';
import { AmericaComponent } from './america/america.component';
import { AfricaComponent } from './africa/africa.component';
import { EuropeComponent } from './europe/europe.component';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ProfilComponent } from "./profil/profil.component";
import { ContactComponent } from "./contact/contact.component";
import { Game2Component } from "./game2/game2.component";
import { Game3Component } from "./game3/game3.component";
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'continents', component: ContinentsComponent },
  { path: 'america', component: AmericaComponent },
  { path: 'asia', component: AsiaComponent },
  { path: 'africa', component: AfricaComponent },
  { path: 'europe', component: EuropeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'game2', component: Game2Component },
  { path: 'game3', component: Game3Component }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
