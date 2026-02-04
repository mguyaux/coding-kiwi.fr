import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-contact',
  template: `
    <section class="section" aria-labelledby="contact-title">
      <div class="sidebar stacked">
        <div>
          <h1 id="contact-title">Contact</h1>
          <div class="card compact">
            <p>Décrivez brièvement votre projet (contexte, objectifs, échéance) et nous vous répondrons rapidement.</p>
            <p>Adresse directe : <span [textContent]="email"></span></p>
          </div>
        </div>
        <figure class="figure">
          <div class="image-card crop classic">
            <img class="illustration small" src="assets/illustrations/I.jpg" alt="Relation de confiance et transparence" loading="lazy" sizes="(max-width: 900px) 80vw, 540px" />
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

    .image-card img {
      display: block;
      width: 100%;
      height: auto;
      margin: 0; /* supprime la marge globale .illustration */
    }

    /* Recadrage optionnel pour une intégration propre */
    .image-card.crop { aspect-ratio: var(--ratio, 16/9); }
    .image-card.crop img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 45%;
    }
    .image-card.crop.banner { --ratio: 21/9; }
    .image-card.crop.classic { --ratio: 4/3; }
    .image-card.crop.square { --ratio: 1/1; }

    /* Empiler l'image sous le texte */
    .sidebar.stacked {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      align-items: start;
    }

    .sidebar.stacked .figure { justify-self: center; }

    /* Largeur max pour l'illustration */
    .illustration.small {
      width: 100%;
      max-width: 540px;
    }
  `]
})
export class ContactComponent {
  // Construit l’email dynamiquement pour limiter la récupération par des bots
  private readonly emailCodes = [99,111,110,116,97,99,116,64,99,111,100,105,110,103,45,107,105,119,105,46,102,114];
  public readonly email = String.fromCharCode(...this.emailCodes);
}
