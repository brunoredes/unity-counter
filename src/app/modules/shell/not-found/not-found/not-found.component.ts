import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PickRandomImageService } from '../../../data-access/image/lib/pick-random/pick-random-image.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  private readonly pickRandomImageService: PickRandomImageService = inject(
    PickRandomImageService
  );

  setNotFoundImage() {
    return this.pickRandomImageService.getRandomImage();
  }
}
