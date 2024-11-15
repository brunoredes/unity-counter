import { Component, output } from '@angular/core';

@Component({
  selector: 'app-announcement',
  standalone: true,
  imports: [],
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.scss',
})
export class AnnouncementComponent {
  hideEvent = output<boolean>();
}
