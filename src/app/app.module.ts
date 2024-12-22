import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { ContinentsComponent } from './continents/continents.component';
import { AsiaComponent } from './asia/asia.component';
import { AmericaComponent } from './america/america.component';
import { AfricaComponent } from './africa/africa.component';
import { EuropeComponent } from './europe/europe.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfilComponent } from './profil/profil.component';
import { ContactComponent } from './contact/contact.component';
import { Game2Component } from './game2/game2.component';
import { Game3Component } from './game3/game3.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamesComponent,
    ContinentsComponent,
    AsiaComponent,
    AmericaComponent,
    AfricaComponent,
    EuropeComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfilComponent,
    ContactComponent,
    Game2Component,
    Game3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
