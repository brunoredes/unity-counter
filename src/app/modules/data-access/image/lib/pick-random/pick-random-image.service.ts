import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PickRandomImageService {
  private images = ['/images/not-found/desespero.webp', '/images/not-found/sem_sentido.webp'];

  public getRandomImage() {
    return this.images[Math.floor(Math.random() * this.images.length)];
  }
}
