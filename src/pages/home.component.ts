import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <!-- HERO concis -->
    <section class="hero" aria-labelledby="hero-title">
      <div class="split">
        <div class="hero-copy">
          <div class="hero-badge">Conseil & Développement</div>
          <h1 id="hero-title">Des logiciels utiles, clairs et fiables</h1>
          <p class="subtitle lead">Accompagnement technique, conception et développement sur mesure — sobriété, qualité et compréhension métier.</p>
        </div>
        <figure class="figure">
          <div class="image-card elevated first">
            <img class="illustration" src="assets/illustrations/A.jpg" alt="Vision globale et architecture logicielle claire" loading="eager" sizes="(max-width: 900px) 80vw, 380px" />
          </div>
        </figure>
      </div>
    </section>

    <!-- 3 raisons (scannable) -->
    <section class="section" aria-labelledby="reasons-title">
      <h2 id="reasons-title">Pourquoi travailler avec Coding Kiwi</h2>
      <ul class="auto-grid" role="list">
        <li class="card">
          <h3>Clarté avant tout</h3>
          <p>On clarifie le besoin et on documente l’essentiel — pas de jargon, pas de complexité inutile.</p>
        </li>
        <li class="card">
          <h3>Qualité & fiabilité</h3>
          <p>Des choix sobres et durables, un code maintenable, des tests pertinents.</p>
        </li>
        <li class="card">
          <h3>Accompagnement direct</h3>
          <p>Un interlocuteur impliqué, transparent et disponible tout au long du projet.</p>
        </li>
      </ul>
    </section>

    <!-- Aperçu services (3 tuiles) -->
    <section class="section" aria-labelledby="services-preview-title">
      <h2 id="services-preview-title">Ce que nous faisons</h2>
      <ul class="auto-grid" role="list">
        <li class="tile">
          <h3>Conseil technique</h3>
          <p>Cadrage, audit et décisions d’architecture.</p>
        </li>
        <li class="tile">
          <h3>Développement sur mesure</h3>
          <p>Applications web, backends, outils internes, MVP.</p>
        </li>
        <li class="tile">
          <h3>Innovation responsable</h3>
          <p>IA comme outil d’aide — au service de la clarté.</p>
        </li>
      </ul>
    </section>

    <!-- Méthode (mini-bloc) -->
    <section class="section" aria-labelledby="method-mini-title">
      <h2 id="method-mini-title">Une méthode simple et rassurante</h2>
      <div class="sidebar stacked">
        <div>
          <ul>
            <li>Compréhension du besoin → périmètre réaliste</li>
            <li>Itérations courtes → retours fréquents</li>
            <li>Tests & préparation au déploiement</li>
          </ul>
        </div>
        <figure class="figure">
          <div class="image-card crop banner">
            <img class="illustration small" src="assets/illustrations/D.jpg" alt="Méthode et processus de travail" loading="lazy" />
          </div>
        </figure>
      </div>
    </section>

    <!-- Projets (aperçu) -->
    <section class="section" aria-labelledby="projects-title">
      <h2 id="projects-title">Projets & initiatives</h2>
      <div class="sidebar stacked">
        <div>
          <p>Des réalisations conçues avec sobriété — dont <strong>mon‑acte‑immo</strong> pour l’analyse de documents immobiliers.</p>
        </div>
        <figure class="figure">
          <div class="image-card crop classic">
            <img class="illustration small" src="assets/illustrations/J.jpg" alt="Intelligence artificielle comme outil d’aide" loading="lazy" />
          </div>
        </figure>
      </div>
    </section>

  `,
  styles: [`
    :host { display: block; }

    /* Intégration des images */
    .figure { margin: 0; }

    .image-card {
      border-radius: 14px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      background: rgba(255, 255, 255, 0.9);
      box-shadow:
        0 12px 28px rgba(0, 0, 0, 0.12),
        0 2px 6px rgba(0, 0, 0, 0.06);
      overflow: hidden;
    }

    .image-card.elevated {
      box-shadow:
        0 16px 36px rgba(0, 0, 0, 0.14),
        0 4px 10px rgba(0, 0, 0, 0.08);
    }

    .image-card.first { margin-top: 12px; } /* Descendre un peu la première image */

    .image-card img {
      display: block;
      width: 100%;
      height: auto;
      margin: 0;
    }

    /* Recadrage optionnel pour supprimer le bandeau blanc en haut des images 2 et 3 */
    .image-card.crop {
      aspect-ratio: var(--ratio, 16/9);
    }
    .image-card.crop img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 45%;
    }
    .image-card.crop.banner { --ratio: 21/9; }
    .image-card.crop.classic { --ratio: 4/3; }
    .image-card.crop.square { --ratio: 1/1; }

    /* Empiler l'image sous le texte pour certaines sections */
    .sidebar.stacked {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      align-items: start;
    }

    .sidebar.stacked .figure {
      justify-self: center;
    }

    /* Optionnel: largeur max pour les petites illustrations */
    .illustration.small {
      width: 100%;
      max-width: 540px;
    }
  `]
})
export class HomeComponent {}
