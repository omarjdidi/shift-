import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nos-services',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here

  templateUrl: './nos-realisations.component.html',
  styleUrls: ['./nos-realisations.component.css'],
})
export class NosRealisationsComponent {

  portfolios = [
    { link: 'https://test.shiftup-agency.com/wp-content/uploads/2024/06/photo-stand.png', imageUrl: 'https://test.shiftup-agency.com/wp-content/uploads/2024/06/photo-stand.png', imageAlt: 'photo-stand', width: 750, height: 595 },
    { link: 'https://test.shiftup-agency.com/wp-content/uploads/2024/06/23.png', imageUrl: 'https://test.shiftup-agency.com/wp-content/uploads/2024/06/23.png', imageAlt: '23', width: 388, height: 595 },
    { link: 'https://test.shiftup-agency.com/wp-content/uploads/2024/06/2648.png', imageUrl: 'https://test.shiftup-agency.com/wp-content/uploads/2024/06/2648.png', imageAlt: '2648', width: 470, height: 595 },
    { link: 'https://test.shiftup-agency.com/wp-content/uploads/2024/06/Presentation-zeenovi-EFT-AB4.png', imageUrl: 'https://test.shiftup-agency.com/wp-content/uploads/2024/06/Presentation-zeenovi-EFT-AB4.png', imageAlt: 'Présentation-zeenovi-EFT-AB4', width: 1418, height: 810 },
    { link: 'https://test.shiftup-agency.com/wp-content/uploads/2024/06/8899.png', imageUrl: 'https://test.shiftup-agency.com/wp-content/uploads/2024/06/8899.png', imageAlt: '8899', width: 1440, height: 810 }
  ];

  testimonials = [
    { comment: 'Guys from Innomerce are real professionals...', name: 'Julia Williams', position: 'Happy client' },
    { comment: 'Innomerce experts made a detailed analysis about my business...', name: 'Shon Robert', position: 'Happy client' },
    { comment: 'I own a small handmade shop...', name: 'Adam Li', position: 'Happy client' }
  ];
}
