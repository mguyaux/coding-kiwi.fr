import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-services',
  template: `
    <section class="section" aria-labelledby="services-title">
      <div class="split">
        <div>
          <h1 id="services-title">Services</h1>
          <p class="muted">Expliquer précisément ce que propose Coding Kiwi, sans jargon inutile.</p>
        </div>
        <figure class="figure">
          <img class="illustration" src="assets/illustrations/B.jpg" alt="Conseil et accompagnement technique" loading="eager" />
        </figure>
      </div>

      <article class="section" aria-labelledby="svc1">
        <h2 id="svc1">Conseil et accompagnement informatique</h2>
        <p>
          Coding Kiwi accompagne ses clients dans la réflexion, la structuration et la sécurisation de leurs projets numériques. Cela inclut notamment&nbsp;:
        </p>
        <ul>
          <li>aide à la définition du besoin,</li>
          <li>audit de solutions existantes,</li>
          <li>choix d’architectures adaptées,</li>
          <li>accompagnement à la prise de décision technique.</li>
        </ul>
      </article>

      <article class="section" aria-labelledby="svc2">
        <div class="sidebar">
          <div>
            <h2 id="svc2">Développement logiciel sur mesure</h2>
            <p>Conception et développement d’applications&nbsp;:</p>
            <ul>
              <li>web,</li>
              <li>backend,</li>
              <li>outils internes,</li>
              <li>prototypes et MVP.</li>
            </ul>
            <p>Les solutions sont pensées pour être&nbsp;:</p>
            <ul>
              <li>compréhensibles,</li>
              <li>évolutives,</li>
              <li>maintenables dans le temps.</li>
            </ul>
          </div>
          <figure class="figure">
            <img class="illustration small" src="assets/illustrations/C.jpg" alt="Développement logiciel sur mesure" loading="lazy" sizes="(max-width: 900px) 80vw, 460px" />
          </figure>
        </div>
      </article>

      <article class="section" aria-labelledby="svc3">
        <div class="sidebar">
          <div>
            <h2 id="svc3">Projets innovants et outils métiers</h2>
            <p>
              Coding Kiwi développe également ses propres outils, conçus à partir de problématiques réelles, avec une attention particulière portée à&nbsp;:
            </p>
            <ul>
              <li>la clarté fonctionnelle,</li>
              <li>la sécurité,</li>
              <li>l’expérience utilisateur.</li>
            </ul>
          </div>
          <figure class="figure">
            <img class="illustration small" src="assets/illustrations/J.jpg" alt="Intelligence artificielle comme outil d’aide" loading="lazy" sizes="(max-width: 900px) 80vw, 460px" />
          </figure>
        </div>
      </article>
    </section>
  `,
})
export class ServicesComponent {}
