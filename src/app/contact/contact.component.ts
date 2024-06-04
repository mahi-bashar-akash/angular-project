import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from "@angular/forms";
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  email: string = 'mahibashar2023@gmail.com';
  phone: string = '+880 01645820007';
  address: string = 'Mollapara Bashtola, Jessore Sadar, Jessore, Bangladesh';

  contactParam = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  contactForm(event: any) {
    console.log(event.target)
  }

}
