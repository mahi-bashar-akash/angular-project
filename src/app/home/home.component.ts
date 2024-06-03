import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  userCompany: string = 'Redishketch';
  userEducationalQualification: string = 'Bachelor of Business Administration ( Computer Application )';
  userProgrammingExperience: string = 'HTML, CSS, JavaScript (TypeScript) , PHP, MySQL.';
  userFrameworkDevelopment: string = 'PHP ( Laravel ), Javascript ( Vue, Next, Angular )';
  userName: string = 'Mahi Bashar Akash';
  userEmail: string = 'mahibashar2023@gmail.com';
  uniqueNumber: string = '+880';
  userPhoneNumber: string = '01400125289';
  userPresentAddress: string = 'Bashtolla, Mollapara, Jessore Sadar, Jessore, Bangladesh';

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
