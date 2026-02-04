import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-legal',
  template: `
    <section class="section" aria-labelledby="legal-title">
      <h1 id="legal-title">Mentions légales</h1>
      <p class="muted">Informations légales obligatoires. Merci de fournir les éléments manquants pour finaliser.</p>

      <dl>
        <dt>Dénomination sociale</dt>
        <dd><strong>Coding Kiwi</strong></dd>

        <dt>Forme juridique</dt>
        <dd>EURL</dd>

        <dt>Siège social</dt>
        <dd><em>À compléter</em></dd>

        <dt>SIREN</dt>
        <dd><em>À compléter</em></dd>

        <dt>Directeur de la publication</dt>
        <dd><em>À compléter</em> (représentant légal)</dd>

        <dt>Contact</dt>
        <dd><a href="mailto:contact@coding-kiwi.fr">contact&#64;coding-kiwi.fr</a></dd>

        <dt>Hébergeur</dt>
        <dd>
          <p><em>À compléter</em></p>
          <p class="muted">(Nom de l’hébergeur, adresse, téléphone)</p>
        </dd>
      </dl>
    </section>
  `,
})
export class LegalComponent {}
