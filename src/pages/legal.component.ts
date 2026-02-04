import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-legal',
  template: `
    <section class="section" aria-labelledby="legal-title">
      <h1 id="legal-title">Mentions légales</h1>

      <dl>
        <dt>Dénomination sociale</dt>
        <dd><strong>CODING KIWI</strong></dd>

        <dt>Forme juridique</dt>
        <dd>Société à responsabilité limitée (sans autre indication)</dd>

        <dt>Siège social</dt>
        <dd>47 RUE ANTONIN PERRIN, 69100 VILLEURBANNE, France</dd>

        <dt>SIREN</dt>
        <dd>982 699 639</dd>

        <dt>SIRET (siège social)</dt>
        <dd>982 699 639 00018</dd>

        <dt>N° TVA intracommunautaire</dt>
        <dd>FR45 982 699 639</dd>

        <dt>Capital social</dt>
        <dd>500,00 € (fixe)</dd>

        <dt>Contact</dt>
        <dd><a [href]="'mailto:' + email" [textContent]="email"></a></dd>

        <dt>Directeur de la publication</dt>
        <dd>Maxime Guyaux</dd>

        <dt>Hébergeur du site</dt>
        <dd>
          Github Pages <a href="https://pages.github.com/" target="_blank" rel="noopener">https://pages.github.com/</a>
        </dd>

        <dt>Mise à jour</dt>
        <dd>04/02/2026</dd>
      </dl>
    </section>
  `,
})
export class LegalComponent {
  // Construit l’email dynamiquement pour limiter la récupération par des bots
  private readonly emailCodes = [99,111,110,116,97,99,116,64,99,111,100,105,110,103,45,107,105,119,105,46,102,114];
  public readonly email = String.fromCharCode(...this.emailCodes);
}
