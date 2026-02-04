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
          <img class="illustration" src="assets/illustrations/A.jpg" alt="Vision globale et architecture logicielle claire" loading="eager" sizes="(max-width: 900px) 80vw, 380px" />
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
      <div class="sidebar">
        <div>
          <ul>
            <li>Compréhension du besoin → périmètre réaliste</li>
            <li>Itérations courtes → retours fréquents</li>
            <li>Tests & préparation au déploiement</li>
          </ul>
        </div>
        <figure class="figure">
          <img class="illustration small" src="assets/illustrations/D.jpg" alt="Méthode et processus de travail" loading="lazy" />
        </figure>
      </div>
    </section>

    <!-- Projets (aperçu) -->
    <section class="section" aria-labelledby="projects-title">
      <h2 id="projects-title">Projets & initiatives</h2>
      <div class="sidebar">
        <div>
          <p>Des réalisations conçues avec sobriété — dont <strong>mon‑acte‑immo</strong> pour l’analyse de documents immobiliers.</p>
        </div>
        <figure class="figure">
          <img class="illustration small" src="assets/illustrations/J.jpg" alt="Intelligence artificielle comme outil d’aide" loading="lazy" />
        </figure>
      </div>
    </section>

  `,
})
export class HomeComponent {}
