import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-projects',
  template: `
    <section class="section" aria-labelledby="projects-title">
      <div class="split">
        <div>
          <h1 id="projects-title">Projets & produits</h1>
          <p class="muted">Montrer le savoir‑faire à travers des réalisations concrètes.</p>
        </div>
        <figure class="figure">
          <img class="illustration" src="assets/illustrations/H.jpg" alt="Produits et projets internes" loading="eager" sizes="(max-width: 900px) 80vw, 460px" />
        </figure>
      </div>

      <article class="section" aria-labelledby="mai-title">
        <div class="sidebar">
          <div>
            <h2 id="mai-title">mon-acte-immo</h2>
            <p>
              <em>mon-acte-immo</em> est un service en ligne permettant d’analyser et d’aider à la compréhension de documents immobiliers grâce à des outils d’analyse automatisée.
            </p>
            <p>L’objectif est d’apporter&nbsp;:</p>
            <ul>
              <li>clarté,</li>
              <li>compréhension,</li>
              <li>sérénité</li>
            </ul>
            <p>aux particuliers avant la signature d’un acte.</p>
            <p class="muted" role="note">mon-acte-immo est un outil d’aide à la compréhension et à l’analyse, et ne remplace pas l’intervention d’un professionnel du droit.</p>
          </div>
          <figure class="figure">
            <img class="illustration small" src="assets/illustrations/F.jpg" alt="Innovation responsable" loading="lazy" sizes="(max-width: 900px) 80vw, 460px" />
          </figure>
        </div>
      </article>
    </section>
  `,
})
export class ProjectsComponent {}
