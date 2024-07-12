import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './modules/shell/footer/footer.component';
import { HeaderComponent } from './modules/shell/header/header.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly titleService: Title = inject(Title);
  private readonly meta: Meta = inject(Meta);
  constructor() {
    this.titleService.setTitle('Unity Counter');

    this.meta.addTags([
      {
        name: 'description',
        content: 'Unity counter is a system for counting TFT unities for analytics purpose',
      },
      { name: 'author', content: 'Bruno Donatelli' },
      { name: 'keywords', content: 'TFT, Teamfight Tactics, Teamfighttactics, tft' },
      { property: 'og:title', content: 'Unity Counter' },
      {
        property: 'og:description',
        content: 'Unity counter is a system for counting TFT unities for analytics purpose',
      },
      { property: 'og:image', content: '/images/logo.png' },
      { property: 'og:url', content: 'https://unity-counter.vercel.app/home' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Unity Counter' },
      {
        name: 'twitter:description',
        content: 'Unity counter is a system for counting TFT unities for analytics purpose',
      },
      { name: 'twitter:image', content: '/images/logo.png' },
    ]);
  }
}
