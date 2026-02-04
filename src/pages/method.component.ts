import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-method',
  template: `
    <section class="section" aria-labelledby="method-title">
      <div class="split">
        <div>
          <h1 id="method-title">Méthode & approche</h1>
          <p class="muted">Une démarche claire et collaborative, pour avancer avec sérénité.</p>
        </div>
        <figure class="figure">
          <img class="illustration small" src="assets/illustrations/D.jpg" alt="Méthode et processus de travail" loading="lazy" sizes="(max-width: 900px) 80vw, 460px" />
        </figure>
      </div>

      <ol class="section auto-grid">
        <li class="card compact">
          <h3>Compréhension du besoin</h3>
          <p>Nous clarifions le contexte, les objectifs et les contraintes. Nous reformulons et validons ensemble la compréhension, sans jargon.</p>
        </li>
        <li class="card compact">
          <h3>Analyse et cadrage</h3>
          <p>Étude rapide de l’existant, des risques et des priorités. Définition d’un périmètre réaliste et d’un plan d’action.</p>
        </li>
        <li class="card compact">
          <h3>Conception technique adaptée</h3>
          <p>Choix d’architectures et d’outils pragmatiques. Documentation légère, utile et compréhensible.</p>
        </li>
        <li class="card compact">
          <h3>Développement progressif</h3>
          <p>Itérations courtes, retours fréquents, démonstrations régulières. Le code vise la simplicité et la maintenabilité.</p>
        </li>
        <li class="card compact">
          <h3>Tests, validation et accompagnement</h3>
          <p>Tests pertinents, validation avec les utilisateurs, préparation au déploiement et accompagnement post‑mise en production.</p>
        </li>
      </ol>
    </section>
  `,
})
export class MethodComponent {}
