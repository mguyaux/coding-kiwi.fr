import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-contact',
  template: `
    <section class="section" aria-labelledby="contact-title">
      <div class="split">
        <div>
          <h1 id="contact-title">Contact</h1>
          <div class="card compact">
            <p>Décrivez brièvement votre projet (contexte, objectifs, échéance) et nous vous répondrons rapidement.</p>
            <p>Adresse directe : contact&#64;coding-kiwi.fr</p>
          </div>
        </div>
        <figure class="figure">
          <img class="illustration small" src="assets/illustrations/I.jpg" alt="Relation de confiance et transparence" loading="lazy" sizes="(max-width: 900px) 80vw, 460px" />
        </figure>
      </div>
    </section>
  `,
})
export class ContactComponent {}
