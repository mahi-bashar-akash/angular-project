import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  userCompany: string = 'Redishketch';
  userEducationalQualification: string = 'Bachelor of Business Administration ( Computer Application )';
  userProgrammingExperience: string = 'HTML, CSS, JavaScript (TypeScript) , PHP, MySQL.';
  userFrameworkDevelopment: string = 'PHP ( Laravel ), Javascript ( Vue, Next, Angular )';
  userName: string = 'Mahi Bashar Akash';
  userEmail: string = 'mahibashar2023@gmail.com';
  uniqueNumber: string = '+880';
  userPhoneNumber: string = '01400125289';
  userPresentAddress: string = 'Bashtolla, Mollapara, Jessore Sadar, Jessore, Bangladesh';

}
