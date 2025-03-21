import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  downloadMagazine() {
    const pdfUrl = 'assets/pdf/magazineshiftup.pdf'; // Corrected path

    // Open the PDF in a new tab for preview
    const newTab = window.open(pdfUrl, '_blank');

    // Wait 2 seconds, then trigger the download
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'magazineshiftup.pdf'; // File name for download

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 2000); // Delay to allow preview first
  }
}
