import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about',
  template: `
    <section class="section" aria-labelledby="about-title">
      <h1 id="about-title">À propos</h1>
      <p class="muted">Humaniser Coding Kiwi.</p>

      <ul class="auto-grid" role="list" aria-label="À propos — cartes">
        <li class="card compact">
          <h3>Démarche</h3>
          <p>Coding Kiwi est une entreprise de conseil et de développement logiciel fondée par <strong>Maxime Guyaux</strong>.</p>
          <ul>
            <li>Approche pragmatique du numérique</li>
            <li>Solutions utiles et compréhensibles</li>
            <li>Exigence de qualité et de fiabilité</li>
          </ul>
        </li>
        <li class="card compact">
          <h3>Valeurs</h3>
          <ul>
            <li>Indépendance</li>
            <li>Responsabilité</li>
            <li>Relation de confiance</li>
          </ul>
        </li>
      </ul>
    </section>
  `,
})
export class AboutComponent {}
