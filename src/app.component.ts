import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  template: `
    <a class="skip-link" href="#main-content">Aller au contenu</a>
    <nav class="top-nav" [class.nav-open]="menuOpen">
      <a class="brand" [routerLink]="['/']">Coding Kiwi</a>
      <div class="spacer"></div>

      <!-- Desktop links -->
      <div class="nav-links">
        <a [routerLink]="['/']" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" (click)="closeMenu()">Accueil</a>
        <a routerLink="/services" routerLinkActive="active" (click)="closeMenu()">Services</a>
        <a routerLink="/methode" routerLinkActive="active" (click)="closeMenu()">Méthode</a>
        <a routerLink="/projets" routerLinkActive="active" (click)="closeMenu()">Projets</a>
        <a routerLink="/a-propos" routerLinkActive="active" (click)="closeMenu()">À propos</a>
        <a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contact</a>
      </div>


      <!-- Hamburger -->
      <button class="icon-btn hamburger" type="button"
              (click)="menuOpen = !menuOpen"
              [attr.aria-expanded]="menuOpen"
              aria-controls="mobile-menu"
              aria-label="Menu">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/></svg>
      </button>

      <!-- Mobile drawer -->
      <div id="mobile-menu" class="mobile-menu" *ngIf="menuOpen">
        <a [routerLink]="['/']" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" (click)="closeMenu()">Accueil</a>
        <a routerLink="/services" routerLinkActive="active" (click)="closeMenu()">Services</a>
        <a routerLink="/methode" routerLinkActive="active" (click)="closeMenu()">Méthode</a>
        <a routerLink="/projets" routerLinkActive="active" (click)="closeMenu()">Projets</a>
        <a routerLink="/a-propos" routerLinkActive="active" (click)="closeMenu()">À propos</a>
        <a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contact</a>
        <a routerLink="/mentions-legales" routerLinkActive="active" (click)="closeMenu()">Mentions légales</a>
      </div>
    </nav>

    <main id="main-content">
      <router-outlet></router-outlet>
    </main>

    <footer>
      © {{ year }} · Coding Kiwi · <a routerLink="/mentions-legales">Mentions légales</a>
    </footer>
  `,
})
export class AppComponent {
  year = new Date().getFullYear();
  menuOpen = false;

  closeMenu() { this.menuOpen = false; }
}
