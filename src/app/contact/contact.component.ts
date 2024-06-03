import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

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
