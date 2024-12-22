import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  username: string = '';
  fullName: string = '';
  email: string = '';
  bio: string = 'Amateur de jeux de quiz et toujours prêt pour un nouveau défi !';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Simuler la récupération des données depuis un service ou un backend
    this.username = 'Jihed';
    this.fullName = 'Bouzidi';
    this.email = 'jihedb93@gmail.com';
  }
  editEmail() {
    this.router.navigate(['/edit-email']);
  }

  editPassword() {
    this.router.navigate(['/edit-password']);
  }
}
