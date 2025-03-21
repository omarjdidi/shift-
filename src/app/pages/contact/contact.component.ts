import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importation ici

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],  // Ajouter FormsModule dans imports
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: '',
    address: '',
    phone:''
  };

  onSubmit() {
    // Affiche les données du formulaire ou les envoie à un backend
    console.log('Formulaire soumis', this.contact);
  }
}